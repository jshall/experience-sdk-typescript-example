function showFunctions(_key: string, value: unknown) {
    return typeof value === 'function' ? value.toString() : value;
}

export function show(label: string, obj: unknown) {
    const lbl = label ?? 'props';
    // @ts-expect-error allow globalThis index
    console.debug(lbl, (globalThis[lbl] = obj));
    return `${label} ${JSON.stringify(obj, showFunctions, 3)}`;
}
