# Kenate Masterclass: From Zero to Robot Hero

**"Explain it like I'm 5, but I want to build a death robot."**

Welcome to your private masterclass. This document is designed to take you from "What is a Servo?" to "I just programmed a Hexapod" without using confusing jargon.

---

## Part 1: What actually is a Robot?

Forget the movies. A robot is just a machine that does **three things provided in a loop**:

1.  **SENSE (Input)**: It looks at the world.
    *   *Examples*: Distance sensors (eyes), Microphones (ears), Thermometers (skin).
2.  **THINK (Process)**: It decides what to do based on what it sees.
    *   *Examples*: "If the wall is close, stop." "If it's hot, turn on the fan."
3.  **ACT (Output)**: It moves or changes something.
    *   *Examples*: Motors spinning, Lights turning on, Speakers beeping.

**The Loop**:
Robots do this thousands of times a second:
`See -> Think -> Act -> See -> Think -> Act...`

---

## Part 2: The Old Way vs. The Kenate Way

### The Old Way (Imperative)
Traditionally, programming robots is like giving a blindfolded person extremely specific instructions:
> "Move your left foot forward 10cm. Wait 0.5 seconds. Now move your right foot. If you hit something, stop main program, run 'turn_left' function..."

It's messy. You have to manage **time** manually. You have to tell the robot *exactly how* to do everything, step by step. If you forget to tell it to check sensors while it's moving, it crashes.

### The Kenate Way (Declarative/Reactive)
Kenate is like being a Chef giving a recipe to a Sous Chef.
You don't say: "Pick up knife, move hand down, slice carrot, lift hand..."
You say: **"The carrot should be sliced."**

In Kenate, you describe the **State** you want the robot to be in, and Kenate handles the messy details of making it happen.

**Analogy**:
*   **Old Way**: You are driving a manual car, controlling every gear shift and clutch pedal.
*   **Kenate**: You are using Cruise Control. You just say "Set speed to 60mph", and the car figures out how much gas to give.

---

## Part 3: The Building Blocks of Kenate

Kenate uses **Components**, just like React uses HTML logic bits. You build a "Tree" of components that represents your robot.

### 1. The Brain (`<KenateRoot>`)
This is the main computer. It sets up the "Loop" we talked about earlier. Everything else goes inside this.

### 2. The Body Parts (`<Motor>`, `<Servo>`, `<Sensor>`)
These represent the physical hardware.
*   **`<Servo pin={1} angle={90} />`**: This tells Kenate: "Make sure the motor plugged into Pin 1 is at 90 degrees."
    *   *Notice*: You don't say "Move to 90". You say "Be at 90". If it's already there, great. If not, it moves.

### 3. The Logic (`<InverseKinematics>`, `<PIDController>`)
These are the "Math Helpers". They take complex math (like "how do I move a leg so the foot touches X, Y, Z?") and turn it into simple numbers for the motors.

---

## Part 4: Building a Hexapod (The "Hello World" of Robotics)

Let's build a 6-legged spider robot. Why? Because it looks cool and it teaches you everything.

### Step A: The Hardware (The Skeleton)
A Hexapod leg has 3 motors (Joints):
1.  **Coxa (Hip)**: Swings the leg forward/backward.
    *   *Like your hip joint when walking.*
2.  **Femur (Thigh)**: Lifts the leg up/down.
    *   *Like your hip joint when lifting your knee.*
3.  **Tibia (Shin)**: Extends the leg out.
    *   *Like your knee joint.*

You have 6 legs. That's `6 x 3 = 18 Motors`.
Controlling 18 motors manually is a nightmare.

### Step B: The Code (The Soul)

Here is the actual code you would write in Kenate, explained line-by-line.

```tsx
function HexapodRobot() {
  // 1. THE BRAIN: The 'useGait' hook is a pre-made brain for walking.
  // It calculates where every single foot needs to be at any exact millisecond
  // to walk smoothly in a specific direction.
  const { legs } = useGait({
    type: 'tripod', // Move 3 legs at a time (stable, like a stool)
    speed: 0.5,     // 50% speed
    direction: { x: 1, y: 0 } // Walk Forward
  });

  // 2. THE BODY: We map (loop) through the 6 legs the brain calculated.
  return (
    <KenateRoot>
      {legs.map((legState, index) => (
        
        // 3. THE MATH HELPER: Inverse Kinematics (IK)
        // IK is magic. You give it a standard point in 3D space (x, y, z),
        // and it calculates the exact angles for the 3 motors to reach that point.
        <InverseKinematics
          key={index}
          target={legState.targetPosition} // "Put foot here"
          lengths={{ coxa: 50, femur: 80, tibia: 120 }} // "My leg bones are this long"
        >
          {/* This component receives the calculated angles (alpha, beta, gamma) */}
          {({ coxaAngle, femurAngle, tibiaAngle }) => (
            <>
              {/* 4. THE MUSCLES: Applying the calculated angles to real pins */}
              
              {/* Hip Motor */}
              <Servo pin={index * 3 + 0} angle={coxaAngle} />
              
              {/* Thigh Motor */}
              <Servo pin={index * 3 + 1} angle={femurAngle} />
              
              {/* Knee Motor */}
              <Servo pin={index * 3 + 2} angle={tibiaAngle} />
            </>
          )}
        </InverseKinematics>
      ))}
    </KenateRoot>
  );
}
```

### Breaking Down the Magic
1.  **`useGait`**: Imagine a conductor. He doesn't play the instruments; he just waves the baton. He says "Leg 1, move forward. Leg 2, stay planted."
2.  **`legState.targetPosition`**: This is a coordinate, like `x: 100, y: 50, z: -30`. It says "I want the tip of the foot to be exactly at this point in space."
3.  **`InverseKinematics`**: This is the translator. It takes that coordinate and thinks: "Okay, to reach `(100, 50, -30)` with a 50mm hip and 80mm thigh, I need to rotate the Hip 30 degrees and the Knee -45 degrees."
4.  **`<Servo>`**: This is the worker. It just hears "Go to 30 degrees" and does it.

---

## Part 5: Wiring Guide (Don't fry your board)

You are likely using a **PCA9685**. This is a "Servo Driver".
*   **Why?**: Your microcontroller (Arduino/ESP32) is weak. It can't power 18 motors. The PCA9685 connects to a battery and splits that power to the motors safely.

**The Golden Rules of Wiring**:
1.  **Common Ground**: Connect the GND of your battery to the GND of your microcontroller. If they don't share a ground, they can't talk.
2.  **Voltage Matters**: Standard servos (SG90/MG996R) like **5V to 6V**. Do NOT plug a 12V Lipo battery directly into them; they will smoke. Use a "UBEC" (voltage regulator) to drop the battery voltage down.
3.  **Signal Wires**: The yellowish/orange wire on the servo is Signal. This goes to the numbered pins on the PCA9685 (0, 1, 2...).

**Hexapod Pinout Map**:
*   Leg 1 (Front Right): Hip=0, Thigh=1, Knee=2
*   Leg 2 (Middle Right): Hip=3, Thigh=4, Knee=5
*   ...and so on.

---

## Part 6: Why "Reactive" Robotics? (The Philosophy)

Why is Kenate special?

Imagine you want a robot to look at a face.
*   **Old Way**:
    ```cpp
    while(true) {
      face = camera.read();
      error = face.x - center.x;
      speed = error * 0.5;
      motor.move(speed);
      delay(10);
    }
    ```
    You have to write the loop yourself. If `camera.read()` freezes for 1 second, your motor stops moving. The robot looks dead.

*   **Kenate Way**:
    ```tsx
    const face = useFaceDetection();
    // Kenate handles the loop. State updates automatically.
    return <Servo angle={map(face.x, 0, 100, 0, 180)} />;
    ```
    If the face detection slows down, the rest of the robot (like the blinking lights or balance system) keeps running perfectly because Kenate manages the schedule. It's **Multitasking** for free.

---

## Glossary of Terms

*   **DoF (Degrees of Freedom)**: How many different ways a joint can move. A knee has 1 DoF (bend). A shoulder has 3 DoF (pitch, yaw, roll).
*   **PWM (Pulse Width Modulation)**: The language of servos. It's quickly flicking the power on and off to tell the motor where to turn.
*   **Gait**: A pattern of walking.
    *   *Tripod*: 3 legs up, 3 legs down. Fast and stable.
    *   *Wave*: 1 leg moves at a time. Very stable, very slow.
*   **PID Controller**: A math formula that makes movement smooth. It prevents the robot from jerking or overshooting its target.

---

## Ready to build?
Go to `src/app/documentation/tutorials/hexapod/page.tsx` in this project. It has the interactive guide waiting for you.

*You got this.*
