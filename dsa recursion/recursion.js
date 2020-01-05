function sheep(num) {
    if(num === 0) {
      return 'All sheep jumped over the fence'
    }
      return `${num}: Another sheep jumps over the fence` + ' ' + sheep(num -1) 
  }

  function powerCaculator(base, exponent) {
    if(exponent === 1) {
      return base
    }
    return base * powerCaculator(base, exponent - 1)
  }

  function reverse(str){
    if(str.length === 0) {
      return str
      }
    return reverse(str.slice(1)) + str.charAt(0)
  }

  function triangle(n) {
    if(n === 0 ) {
      return n
    }
    return n + triangle(n - 1)
  }

  function splitter(str, char) {
    if(str.search(char) === -1) {
      return str
    }
    return str.split(str.search(char))
  }
  
  function fibonacci(n) {
    if(n === 0) {
      return 'im done'
    }
    return fibonacci(n - 1) + fibonacci(n - 2) 
  }