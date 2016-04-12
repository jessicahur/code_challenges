var hanoi = function (numdisc, src, aux, dst) {
  if (numdisc > 0) {
    //Want to move the stack above the bottom disc from src to aux, use the dst post as aux if needed
    hanoi(numdisc - 1, src, dst, aux);
    //Then move the bottom disc from src to dst
    console.log('Move disc ' + numdisc + ' from ' + src + ' to ' + dst);
    //Finally, move the substack from aux to dst. Use the src post as aux if needed
    hanoi(numdisc - 1, aux, src, dst);
  }
};

hanoi(3, 'Src', 'Aux', 'Dst');
