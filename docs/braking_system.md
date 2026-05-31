# Train Braking Systems

This article aims to provide basic knowledge, from the ground up, of the train braking systems currently involved in the game.

## Straight Air Brake

A **railway braking system** is a system used to apply braking to railway locomotives and rolling stock. Its main purpose is to control the speed of railway vehicles so that a moving train can quickly slow down or stop. An **air brake**, which uses compressed air as the main source of braking force, is an important type of braking system in railways.

The simplest and most basic form of air brake is the **straight air brake**: high-pressure compressed air enters the **brake cylinder**, pushes the brake-cylinder piston, and presses the brake shoe against the brake disc or the wheel tread to apply braking. The compressed air is supplied by a compressor and stored in the **main reservoir**. When braking is required, the driver controls compressed air so that it flows through the **straight air pipe** into the brake cylinder.

A schematic diagram of a straight air brake system is shown in Figure 1 (under preparation).

The straight air brake has a simple structure, but it has a critical problem: when the brake pipework fails, for example when cars become uncoupled, the train will not stop automatically, and it may lose its braking capability entirely. In practical applications, it is commonly used as the brake for locomotives, streetcars, and other single-unit vehicles, or as an auxiliary system in an automatic air brake system.

## Automatic Air Brake

### Westinghouse Automatic Air Brake System

The **automatic air brake** system was developed according to the principle of "fail-safe" design, meaning that when the system fails, its response should tend toward a safe state. Compared with the "air-pressure application" principle of a straight air brake system, an automatic air brake system uses the principle of "air-pressure reduction application": pressure in the pipe normally keeps the brakes released, while loss or reduction of pressure applies the brakes. It is called “automatic” because it can automatically apply the brakes in accidents such as train separation. Since it was invented by the Westinghouse company, it is also known as the Westinghouse air brake system.

An automatic air brake system does not send compressed air directly from the locomotive into the brake cylinders throughout the train. Instead, compressed air is first stored in an **auxiliary reservoir** on each vehicle and used as the source of braking power. A **brake pipe** running through the whole train transmits the braking command. A **triple valve**, which connects the brake pipe, the auxiliary reservoir, and the brake cylinder, controls the braking force.

During normal release, the brake pipe is kept pressurized. When brake-pipe pressure is reduced, the triple valve causes air from the auxiliary reservoir to charge the brake cylinder, applying the brakes. When brake-pipe pressure is increased, the triple valve vents the brake cylinder to release the brakes, while the brake pipe recharges the auxiliary reservoir for the next brake application. In this way, when a train separates or the brake pipe ruptures and brake-pipe pressure drops rapidly, the vehicles will brake automatically.

In early systems, because of limitations in the structure of the triple valve, graduated application was possible, but graduated release was usually not possible. Once release was initiated, the brake cylinder would vent directly, and the braking force would essentially be released in one step. This meant that when applying the brakes, the driver could reduce brake-pipe pressure in stages, and the triple valve would correspondingly allow the auxiliary reservoir to increase brake-cylinder pressure in stages until the pressures equalized, gradually increasing braking force. However, when releasing the brakes, the air in the brake cylinder would be fully exhausted in one step, the braking force would drop directly to zero, and braking capability could only be restored after waiting for the auxiliary reservoir to recharge. As technology developed, more complex control valves were introduced to allow more precise control of brake pressure.

A schematic diagram of an automatic air brake system is shown in Figure 2 (under preparation).

### Improvements

**Equalizing Reservoir**

As trains become longer, the amount of air in the system increases, and the time required to charge and vent the system becomes longer. This means that after the driver operates the brake valve, a relatively long time may be required before the pressure change can be observed, and the pressures are difficult to be precisely controlled, which affects operational safety. To address this problem, the **equalizing reservoir** was introduced: a small, sensitive reservoir is installed. The driver directly controls its air pressure through the brake valve, and it then controls the brake-pipe pressure through an equalizing valve.

**Two-Pipe Air Supply**

In the Westinghouse system, the brake pipe is responsible both for transmitting braking commands and for charging the auxiliary reservoirs. When the brake pipe is depressurized to apply the brakes, it cannot effectively replenish air at the same time. Brake application causes the pressure in the auxiliary reservoirs to decrease, while charging the brake cylinders is part of brake release. If a train makes several brake-apply and brake-release cycles within a short time, auxiliary-reservoir pressure may drop significantly, causing a clear reduction in braking force or even brake failure. On the other hand, equipment such as pneumatic doors also requires a stable supply of compressed air.

This led to the two-pipe air-supply system, in which a separate **main reservoir pipe** runs through the whole train from the main reservoir, providing a stable air supply for the auxiliary reservoirs and other equipment.

A schematic diagram of the automatic air brake system used by the trains in this game is shown in Figure 3 (under preparation).

**Electro-Pneumatic Brake**

Pressure changes propagate through the brake pipe at a limited speed. When the train is long, the front and rear of the train do not receive the braking command at the same time, which may cause longitudinal shocks within the train.

To solve this problem, the **electro-pneumatic brake** was developed. An electro-pneumatic brake uses an electrical circuit running through the whole train to transmit braking commands. After each vehicle receives the electrical signal, it immediately operates electromagnetic valves, thereby controlling the air brake equipment to apply or release the brakes in a synchronized manner.

The electro-pneumatic brake does not replace the air brake. Rather, while retaining the safety characteristics of the automatic air brake, it improves braking response speed and control accuracy. It is widely used on EMUs, subway trains, and modern passenger rolling stock.

## Dynamic Braking

In addition to air braking, modern electric locomotives, EMUs, and subway trains also widely use **dynamic braking**.

When a train is running, its traction motors consume electrical energy to produce tractive force. In dynamic braking, the process is reversed: the train’s kinetic energy drives the motors to rotate and generate electricity, thereby producing a braking force that resists the train’s motion. The generated electrical energy can be returned to the overhead line or power supply system for use by other trains; this is called **regenerative braking**. If the power supply system cannot absorb the energy, it can be converted into heat and dissipated through braking resistors; this is called **rheostatic braking** or **resistor braking**.

Compared with air braking, dynamic braking does not rely on friction between brake shoes or brake discs. It can therefore reduce wear on mechanical components and improve energy efficiency. In normal operation, trains usually give priority to dynamic braking when slowing down.

However, the capability of dynamic braking depends on train speed. At low speeds, the braking force that traction motors can produce gradually decreases, making it difficult for dynamic braking alone to bring the train to a complete and stable stop. In addition, when the power supply system or traction system fails, dynamic braking may become unavailable. Therefore, dynamic braking cannot replace air braking, but instead serves as a supplement to it. Modern trains usually combine dynamic braking with air braking: at higher speeds, dynamic braking is used preferentially to provide the main braking force; at lower speeds, air braking supplements or takes over the braking force to ensure that the train can stop safely and reliably.

## Train Braking in the Game

> **Review of the prototypes:**
> 
> - **KR5000** — based on the **Keio 5000 Series**
> - **HR1100 / HR1500** — based on the **Kumoha 112/113/114/115 Series**
> - **DC8500** — based on the **KiHa 85 Series**

### KR5000, HR1500: Dynamic Brake / EP Straight-Air Brake, with Automatic Air Brake Backup

The brake handle controls the **brake notch** (braking effort).

The brake handle commands a brake notch. When braking is applied, the **straight-air brake pipe** pressure varies according to the selected notch and serves as the air brake command. At higher speeds, **dynamic braking** is used preferentially, indicated by the generator lamp being lit. The air brake may be reduced or cut out; therefore, even if straight-air pipe pressure remains constant, brake cylinder pressure may be low.

At low speeds (**below 10 km/h**), dynamic braking is cut out and the air brake takes over. Brake cylinder pressure is then controlled by the straight-air brake pipe. Under normal conditions, the **brake pipe** and **equalizing reservoir** remain charged and at constant pressure.

**Emergency Brake**

When emergency braking is initiated, the brake pipe is rapidly vented, triggering emergency braking throughout the train. The equalizing reservoir pressure drops accordingly, and the straight-air brake pipe is also vented and rendered ineffective. The air brake system then applies maximum brake cylinder pressure.

### HR1100: Automatic Air Brake

On the real prototype, the brake handle is arranged with **straight-air brake control in the initial range** and **automatic air brake control in the latter range**. In the game, only the automatic air brake portion is retained. (This can be observed from the relatively long dead travel between the release and lap positions of the handle; during brake release, a brief rise in straight-air brake pipe pressure can be observed.)

The brake handle controls the charging and exhausting of the **equalizing reservoir**.

Equalizing reservoir pressure in turn controls brake pipe pressure. In a brake application position, the equalizing reservoir pressure is reduced to apply the brakes; in the lap position, pressure is maintained; in the release position, pressure is increased to release the brakes.

The straight-air brake pipe is normally unpressurized.

**Emergency Brake**

When emergency braking is initiated, the brake pipe is rapidly vented, triggering emergency braking throughout the train. The equalizing reservoir pressure drops accordingly, and the straight-air brake pipe is also vented. The air brake system then applies maximum brake cylinder pressure.

### DC8500: Electro-Pneumatic Air Brake

The pressure gauges on this train display only **main reservoir pressure** and **brake cylinder pressure**.

As a diesel multiple unit, this train does not use traction-motor-based dynamic or regenerative braking.

The brake handle commands a brake notch, and an electronic control system regulates brake cylinder pressure accordingly. Each brake notch corresponds to a target brake cylinder pressure, with braking effort increasing as higher notches are selected.