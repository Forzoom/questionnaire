export function placeholder(val, placeholder = '', equal) {
    return (isUndef(val) || val === equal) ? placeholder : val;
}

export function isUndef(val) {
	return val === null || val === undefined;
}