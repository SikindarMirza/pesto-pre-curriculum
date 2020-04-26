
const add = (a,b) => a+b;

const subtract = (a,b) => a-b;

const divide = (a,b) => a/b;

const multiply = (a,b) => a*b;


const describe = (msg, fn) => {
	console.log(msg);
	fn()
}

const it = (msg,fn) => {
  describe(' ' + msg, fn)
}

const expect = (exp) => matchers(exp)

const matchers = (exp) => ({
	toBe : (assertion) => {
		if(exp === assertion) {
			console.log('pass');
			return true
		}
		else {
			console.log('fail');
			console.log(`Expected ${assertion} but received ${exp}`)
			return false
		}
	}
})



module.exports = {
    describe,
    it,
    expect,
		matchers,
		add,
		subtract,
		multiply,
		divide
}
