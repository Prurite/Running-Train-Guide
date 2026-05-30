# Braking Systems of the Trains

**Prototypes:**

- **KR5000** — based on the **Keio 5000 Series**
- **HR1100 / HR1500** — based on the **Kumoha 112/113/114/115 Series**
- **DC8500** — based on the **KiHa 85 Series**

## KR5000, HR1500: Dynamic Brake / Straight-Air Brake with Automatic Air Brake Backup

The brake handle controls the **brake notch** (braking effort).

The brake handle commands a brake notch. When braking is applied, the **straight-air brake pipe** pressure varies according to the selected notch and serves as the air brake command. At higher speeds, **dynamic braking** is used preferentially, indicated by the generator lamp being lit. The air brake may be reduced or cut out; therefore, even if straight-air pipe pressure remains constant, brake cylinder pressure may be low.

At low speeds (**below 10 km/h**), dynamic braking is cut out and the air brake takes over. Brake cylinder pressure is then controlled by the straight-air brake pipe. Under normal conditions, the **brake pipe** and **equalizing reservoir** remain charged and at constant pressure.

**Emergency Brake**

When emergency braking is initiated, the brake pipe is rapidly vented, triggering emergency braking throughout the train. The equalizing reservoir pressure drops accordingly, and the straight-air brake pipe is also vented and rendered ineffective. The air brake system then applies maximum brake cylinder pressure.

## HR1100: Automatic Air Brake

On the real prototype, the brake handle is arranged with **straight-air brake control in the initial range** and **automatic air brake control in the latter range**. In the game, only the automatic air brake portion is retained. (During brake release, a brief rise in straight-air brake pipe pressure can be observed.)

The brake handle controls the charging and exhausting of the **equalizing reservoir**.

Equalizing reservoir pressure in turn controls brake pipe pressure. In a brake application position, the equalizing reservoir pressure is reduced to apply the brakes; in the lap position, pressure is maintained; in the release position, pressure is increased to release the brakes.

The straight-air brake pipe is normally unpressurized.

**Emergency Brake**

When emergency braking is initiated, the brake pipe is rapidly vented, triggering emergency braking throughout the train. The equalizing reservoir pressure drops accordingly, and the straight-air brake pipe is also vented. The air brake system then applies maximum brake cylinder pressure.

## DC8500: Electro-Pneumatic Air Brake

The pressure gauges on this train display only **main reservoir pressure** and **brake cylinder pressure**.

As a diesel multiple unit, this train does not use traction-motor-based dynamic or regenerative braking.

The brake handle commands a brake notch, and an electronic control system regulates brake cylinder pressure accordingly. Each brake notch corresponds to a target brake cylinder pressure, with braking effort increasing as higher notches are selected.

Because the game does not display other pneumatic pressures (such as brake pipe or equalizing reservoir pressure), the exact implementation of the braking system cannot be determined.