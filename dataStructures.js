let optimalCharData = {
    armorClass: {},
    abilities,
    name: "",
    initiative: '',
    spells: [],
    weapon_attacks: {
        ranged: [],
        Melee: []
    },
    conditions,
    creatures,
    currencies,
    hitPointInfo:{},
    items: {
        equipped: {
            armorItems: charf1.getEquippedArmorItems(state),
            weaponItems: charf1.getEquippedWeaponItems(state),
            gearItems: charf1.getEquippedGearItems(state)
        },
        unequipped: {
            armorItems: charf1.getUnequippedArmorItems(state),
            weaponItems: charf1.getUnequippedWeaponItems(state),
            gearItems: charf1.getUnequippedGearItems(state)
        },
    }
}

let spell = {
    activation: {
        activationTime: 0,
        activationType: ""
    },
    alwaysPrepared: false,
    atHigherLevels: [],
    castOnlyAsRitual: false,
    characterLevel: 1,
    name: "",
    usesSpellSlot: false,
    damage: {
        hasDamage: true,
        amountOfDice: 1,
        typeOfDice: 6,
        modifierAddition: 1,
        toString: "1d6+1"
    }
}