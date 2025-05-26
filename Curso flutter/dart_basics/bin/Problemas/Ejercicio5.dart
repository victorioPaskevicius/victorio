List<int> numbers = [1,2,3,4,5,6,7,8,9];

void main () {
  int result = 0;

  for (var i = 0; i < numbers.length; i++) {
    if (i % 2 == 0) {
      result += i;
    }
  }
  print(result);
}