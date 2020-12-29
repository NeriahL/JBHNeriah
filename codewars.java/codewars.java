import java.lang;

class codewars {
    public static void main (String[] args) {
        System.out.print(alternateCase("Hello World"))
    }
     static String alternateCase(final String string) {
         String pst = new String();
         char c = '';
         for (int i = 0; i < string.length; i++) {
             c = string.chatAt(i);
             if (c.isUpperCase()) {
                 c.toLowerCase()
             } else {
                 c.toLowerCase();
             }
             pst += c;
         }
        return string;
    }
}