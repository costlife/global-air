const utils = {
	getLogoByCode(code) {
		return `http://simg1.qunarzz.com/site/images/airlines/${code}.gif`;
	},

	getCode(source) {
        return source.substring(source.indexOf('(') + 1, source.indexOf(')'));
    },

    getName(source) {
        return source.split('|')[1]
    }
};
export default utils;