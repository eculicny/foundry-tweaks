// HOOKS
Hooks.once("ready", function () {
    console.log("Reordering/renaming status effects icons");
    window.CONFIG.statusEffects = [
        // label - Acid Covered  - 5e damge over time effect
        { "id": "corrode", "label": "Acid Covered", "icon": "icons/svg/acid.svg" },
        // label - Armor of Agathys - 5e spell effect
        { "id": "coldShield", "label": "Armor of Agathys", "icon": "icons/svg/ice-shield.svg" },
        // label - Baned
        { "id": "eye", "label": "Baned", "icon": "icons/svg/eye.svg" },
        // label - Bleeding
        { "id": "bleeding", "label": "EFFECT.StatusBleeding", "icon": "icons/svg/blood.svg" },
        // label - Blessed - 5e spell effect
        { "id": "bless", "label": "EFFECT.StatusBlessed", "icon": "icons/svg/angel.svg" },
        // label - Blinded - 5e condition
        { "id": "combat-utility-belt.blinded", "label": "Blinded", "icon": "modules/combat-utility-belt/icons/blinded.svg", },
        // label - Burning - 5e damage over time effect
        { "id": "burning", "label": "EFFECT.StatusBurning", "icon": "icons/svg/fire.svg" },
        // label - Charmed - 5e condition
        { "id": "combat-utility-belt.charmed", "label": "Charmed", "icon": "modules/combat-utility-belt/icons/charmed.svg", },
        // label - Concentrating - 5e common status
        { "id": "combat-utility-belt.concentrating", "label": "Concentrating", "icon": "modules/combat-utility-belt/icons/concentrating.svg", },
        // label - Cursed - 5e common status
        { "id": "curse", "label": "EFFECT.StatusCursed", "icon": "icons/svg/sun.svg" },
        // label - Dead - 5e condition
        { "id": "dead", "label": "EFFECT.StatusDead", "icon": "icons/svg/skull.svg" },
        // label - Deafened - 5e condition
        { "id": "combat-utility-belt.deafened", "label": "Deafened", "icon": "modules/combat-utility-belt/icons/deafened.svg", },
        // label - Degenerating
        { "id": "degen", "label": "EFFECT.StatusDegen", "icon": "icons/svg/degen.svg" },
        // label - Diseased - 5e common status
        { "id": "disease", "label": "EFFECT.StatusDisease", "icon": "icons/svg/biohazard.svg" },
        // label - Empowered
        { "id": "upgrade", "label": "EFFECT.StatusUpgrade", "icon": "icons/svg/upgrade.svg" },
        // label - Exhaustion # - 5e condition
        { "id": "combat-utility-belt.exhaustion-1", "label": "Exhaustion 1", "icon": "modules/combat-utility-belt/icons/exhaustion1.svg", },
        { "id": "combat-utility-belt.exhaustion-2", "label": "Exhaustion 2", "icon": "modules/combat-utility-belt/icons/exhaustion2.svg", },
        { "id": "combat-utility-belt.exhaustion-3", "label": "Exhaustion 3", "icon": "modules/combat-utility-belt/icons/exhaustion3.svg", },
        { "id": "combat-utility-belt.exhaustion-4", "label": "Exhaustion 4", "icon": "modules/combat-utility-belt/icons/exhaustion4.svg", },
        { "id": "combat-utility-belt.exhaustion-5", "label": "Exhaustion 5", "icon": "modules/combat-utility-belt/icons/exhaustion5.svg", },
        // label - Frightened - 5e condition
        { "id": "combat-utility-belt.frightened", "label": "Frightened", "icon": "modules/combat-utility-belt/icons/frightened.svg", },
        // label - Fire Shield - 5e spell effect
        { "id": "fireShield", "label": "EFFECT.StatusFireShield", "icon": "icons/svg/fire-shield.svg" },
        // label - Flying - 5e common state
        { "id": "fly", "label": "EFFECT.StatusFlying", "icon": "icons/svg/wing.svg" },
        // label - Frozen
        { "id": "frozen", "label": "EFFECT.StatusFrozen", "icon": "icons/svg/frozen.svg" },
        // label - Grappled - 5e condition
        { "id": "combat-utility-belt.grappled", "label": "Grappled", "icon": "modules/combat-utility-belt/icons/grappled.svg", },
        // label - Hunter's Mark - 5e common status
        { "id": "target", "label": "Hunter's Mark", "icon": "icons/svg/target.svg" },
        // label - Incapacitated - 5e condition
        { "id": "combat-utility-belt.incapacitated", "label": "Incapacitated", "icon": "modules/combat-utility-belt/icons/incapacitated.svg", },
        // label - Invisible - 5e condition
        { "id": "combat-utility-belt.invisible", "label": "Invisible", "icon": "modules/combat-utility-belt/icons/invisible.svg", },
        // label - Magic Shield - 5e spell effect
        { "id": "magicShield", "label": "EFFECT.StatusMagicShield", "icon": "icons/svg/mage-shield.svg" },
        // label - Paralyzed - 5e condition
        { "id": "combat-utility-belt.paralyzed", "label": "Paralyzed", "icon": "modules/combat-utility-belt/icons/paralyzed.svg", },
        // label - Petrified - 5e condition
        { "id": "combat-utility-belt.petrified", "label": "Petrified", "icon": "modules/combat-utility-belt/icons/petrified.svg", },
        // label - Poisoned - 5e condition
        { "id": "combat-utility-belt.poisoned", "label": "Poisoned", "icon": "modules/combat-utility-belt/icons/poisoned.svg", },
        // label - Prone - 5e condition
        { "id": "combat-utility-belt.prone", "label": "Prone", "icon": "modules/combat-utility-belt/icons/prone.svg", },
        // label - Radioactive - uncommon effect - REMOVED
        //{ "id": "radiation", "label": "EFFECT.StatusRadiation", "icon": "icons/svg/radiation.svg" },
        // label - Regenerating
        { "id": "regen", "label": "EFFECT.StatusRegen", "icon": "icons/svg/regen.svg" },
        // label - Restrained - 5e condition
        { "id": "combat-utility-belt.restrained", "label": "Restrained", "icon": "modules/combat-utility-belt/icons/restrained.svg", },
        // label - Shocked
        { "id": "shock", "label": "EFFECT.StatusShocked", "icon": "icons/svg/lightning.svg" },
        // label - Silenced
        { "id": "silence", "label": "EFFECT.StatusSilenced", "icon": "icons/svg/silenced.svg" },
        // label - Sleeping - common alternative to Unconscious
        { "id": "sleep", "label": "Sleeping", "icon": "icons/svg/sleep.svg" },
        // label - Shield of Faith - 5e spell effect
        { "id": "holyShield", "label": "Shield of Faith", "icon": "icons/svg/holy-shield.svg" },
        // label - Stunned - 5e condition
        { "id": "combat-utility-belt.stunned", "label": "Stunned", "icon": "modules/combat-utility-belt/icons/stunned.svg", },
        // label - Unconscious - 5e condition
        { "id": "combat-utility-belt.unconscious", "label": "Unconscious", "icon": "icons/svg/unconscious.svg", },
        // label - Weakened
        { "id": "downgrade", "label": "EFFECT.StatusDowngrade", "icon": "icons/svg/downgrade.svg" },
    ];
});

