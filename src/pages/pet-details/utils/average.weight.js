// you can get both weights unit in this function (kg && lbs). Example:
// `${weight.kg} kg (${weight.pounds} lbs)`;

const formatted_weight = (weight) => `${weight.kg} kg`;

export const breed_average_weight = (femaleWeight, maleWeight) => {
    const min_weight_kg = femaleWeight.kg.substring(0, 2);
    const max_weight_kg = maleWeight.kg.substring(2);
    const min_weight_lbs = femaleWeight.pounds.substring(0, 2);
    const max_weight_lbs = maleWeight.pounds.substring(2);

    const average_weight = {
        kg: `${min_weight_kg} ${max_weight_kg}`,
        pounds: `${min_weight_lbs} ${max_weight_lbs}`,
    };

    return formatted_weight(average_weight);
};