test('the shopping list has milk on it', () => {
    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'milk',
    ];

    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});