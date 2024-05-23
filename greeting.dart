import 'package:js/js.dart';

@JS('greeting')
String greeting() => 'Hello from Dart';

void main() {
  allowInterop(greeting);
}
