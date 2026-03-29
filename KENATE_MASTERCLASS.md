# Kenate Masterclass: From Zero to Robot Hero

**"Explain it like I'm 5, but I want to build a death robot."**

Welcome to your private masterclass. This doc takes you from "What is a motor?" to "I just shipped a real robot" without the boring fluff.

---

## Part 1: What actually is a Robot?

Forget the movies. A robot is a loop that does **three things forever**:

1. **SENSE (Input)**: It looks at the world.
   - *Examples*: Distance sensors (eyes), microcontrollers (reflexes), batteries (pulse).
2. **THINK (Process)**: It decides what to do based on what it sees.
   - *Examples*: "If the wall is close, stop." "If battery is low, go home."
3. **ACT (Output)**: It moves or changes something.
   - *Examples*: Motors spinning, LEDs blinking, speakers beeping.

**The Loop**:
Robots do this thousands of times a second:
`See -> Think -> Act -> See -> Think -> Act...`

---

## Part 2: The Old Way vs. The Kenate Way

### The Old Way (Imperative)
Traditional robotics is like giving a blindfolded person ultra‑specific instructions:
> "Move your left foot forward 10cm. Wait 0.5 seconds. Now move your right foot. If you hit something, stop main program, run 'turn_left' function..."

It’s messy. You micromanage **time** manually. You micromanage every **sensor check** manually. If you forget to check the sensor while moving, the robot crashes.

### The Kenate Way (State‑Driven)
Kenate is like giving a sous‑chef a recipe, not a choreography.
You don’t say: "Move hand 2 inches, slice carrot, lift hand..."
You say: **"The carrot should be sliced."**

In Kenate, you declare the **State** the robot should be in, and Kenate keeps the loop running at a fixed cadence.

**Analogy**:
- **Old Way**: Manual transmission, full foot‑and‑hand choreography.
- **Kenate**: Cruise control. You set the goal; the engine keeps the rhythm.

---

## Part 3: The Real Building Blocks (What Actually Exists)

Kenate isn’t a React UI system. It’s a **state‑machine engine** with a **host + MCU** hardware setup.

### 1) The Brain (Host)
Your **Raspberry Pi / Jetson / laptop** runs Kenate. It drives the loop and your mission logic.

### 2) The Muscle (MCU)
Your **Arduino / ESP32 / STM32** handles low‑level IO. It listens on serial and obeys commands.

### 3) The States (Your Logic)
You write Python classes that define behavior in `on_update()`.

### 4) The Bridge (Serial Transport)
Kenate talks to the MCU using a tiny JSON protocol:
- `motor_set` to drive motors
- `sensor_get` to read sensors

---

## Part 4: The Reference Robot (The “Real” Hello World)

We ship a reference profile so people can build a **real robot without guessing**:

**Arduino + TB6612 + HC‑SR04 + Host (Pi/Laptop)**

That means:
- Arduino does the IO
- TB6612 drives the motors
- HC‑SR04 gives distance
- Host runs Kenate and the mission

---

## Part 5: The Real Kenate Code (Atomic Pattern, But Real)

This is actual Kenate‑style code that works with the serial bridge:

```python
from kenate import Robot, BaseState, SerialTransport, SerialMotor, SerialSensor

class PatrolState(BaseState):
    def __init__(self, name, left, right, distance):
        super().__init__(name)
        self.left = left
        self.right = right
        self.distance = distance

    def on_update(self):
        dist = self.distance.read_value() or 0.0
        if dist < 25:
            self.left.set_velocity(0.0)
            self.right.set_velocity(0.0)
        else:
            self.left.set_velocity(0.4)
            self.right.set_velocity(0.4)

transport = SerialTransport(port="COM3", baudrate=115200, timeout=0.5)
left = SerialMotor(transport, "left")
right = SerialMotor(transport, "right")
distance = SerialSensor(transport, "distance")

robot = Robot()
robot.add_state(PatrolState("Patrol", left, right, distance))
robot.start()
```

**Atomic rule still applies**:
- One State = one job.
- Don’t build a monster state that tries to drive, dodge, log, and dance.

---

## Part 6: How the System Actually Runs

1. The C++ engine ticks at a fixed rate (default 1000Hz).
2. It calls your active state’s `on_update()`.
3. Your state sends motor commands and reads sensors.
4. The serial bridge forwards everything to the MCU.

It’s clean, predictable, and way easier to debug than spaghetti loops.

---

## Part 7: Wiring Reality Check (Don’t fry your board)

**Golden Rules**:
1. **Common Ground**: Battery GND and MCU GND must be shared.
2. **Power**: Don’t run motors from the Arduino 5V pin.
3. **Direction**: If a motor spins backwards, flip IN1/IN2 in wiring or config.

**HC‑SR04 Pins (default firmware)**:
- TRIG = 9
- ECHO = 10

---

## Part 8: Why Kenate Exists (Still the Same Reason)

Traditional robotics code gets fragile fast. Kenate enforces structure by making you build **states**, not scripts. That keeps systems modular, predictable, and less fragile as the robot gets more complex.

---

## Part 9: How To Actually Use It (Real Steps)

1. Flash firmware:
   - `examples/firmware/kenate_serial_bridge/kenate_serial_bridge.ino`
   - Install ArduinoJson in the Arduino IDE

2. Install Kenate:
```
pip install -e .
pip install pyserial
```

3. Create a project:
```
kenate init MyRover
cd MyRover
```

4. Configure your robot:
- Edit `configs/arduino_rover.json`
- Set the serial port and behavior

5. Validate hardware:
```
python tools/first_boot_check.py --port COM3
```

6. Run a mission:
```
python examples/arduino_rover.py
```

---

## Glossary of Terms

- **State**: A self‑contained behavior.
- **Bridge**: The serial link to the MCU.
- **HC‑SR04**: Basic ultrasonic distance sensor.
- **TB6612**: Common motor driver.

---

## Ready to build?
Go to `src/app/documentation/tutorials/hexapod/page.tsx` in this project if you want the UI walkthrough. Then use this doc to run the real hardware flow.

*You got this.*
