export function placeholder(val, placeholder = '') {
    return isUndef(val) ? placeholder : val;
}

export function isUndef(val) {
	return val === null || val === undefined;
}