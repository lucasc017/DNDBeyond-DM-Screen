let optimalCharData = {
    armorClass: 10,
    abilities,
    conditions: [],
    creatures: [],
    currencies: {},
    name: "",
    initiative: '',
    spells: [],
    weapon_attacks: {
        ranged: [],
        Melee: []
    },
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
    },
    passiveStats: {},
    speeds: {},
}

let creatures = {
    armorClass: 0,
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageVulnerabilities: [],
    description: "",
    hitPointInfo: {},
    name: "",
    size: 0,
}

let speeds = {
    flying: 0,
    walking: 0,
    climbing: 0,
    burrowing: 0,
    swimming: 0,
}

let passiveStats = {
    passiveInsight: 10,
    passiveInvestigation: 10,
    passivePerception: 10,
}

let spell = {
    activation: {
        activationTime: 0,
        activationType: ""
    },
    alwaysPrepared: false,
    atHigherLevels: [],
    castOnlyAsRitual: false,
    description: "",
    name: "",
    damage: {
        hasDamage: true,
        amountOfDice: 1,
        typeOfDice: 6,
        modifierAddition: 1,
        toString: "1d6+1"
    },
    usesSpellSlot: false,
    prepared: true,
    range: {
        rangeType: "",
        distanceMax: 0,
        distanceMin: 0,
    }
}

let armorItem = {
    armorClass: 1,
    baseItemType: "ARMOR",
    canAttune: false,
    canEquip: true,
    cost: 1,
    description: "",
    equipped: true,
    infusion: null,
    infusionActions: [],
    isAttuned: false,
    isMagic: false,
    name: "name",
    type: "Medium Armor",
}
let gearItem = {
    baseItemType: "GEAR",
    canAttune: false,
    canEquip: true,
    cost: 1,
    description: "",
    equipped: true,
    infusion: null,
    infusionActions: [],
    isAttuned: false,
    isMagic: false,
    name: "name",
    type: "Medium Armor",
}

let weaponItem = {
    baseItemType: "WEAPON",
    canAttune: false,
    canEquip: true,
    categoryInfo: {},
    cost: 1,
    damage: {},
    damageType: "",
    description: "",
    equipped: true,
    infusion: null,
    infusionActions: [],
    isAttuned: false,
    isAdamantine: false,
    isAttuned: false,
    isCustom: false,
    isCustomized: false,
    isSilvered: false,
    proficiency: true,
    isMagic: false,
    name: "name",
    spells: [],
    versatileDamage: {},
    type: "Medium Armor",
}

let damage = {
    diceCount: 1,
    diceMultiplier: 0,
    diceString: "",
    diceValue: 4,
    fixedValue: 3,
}
