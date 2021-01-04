package src;

import java.util.Scanner;

public class KufPehGimmel {
    public static void main (String[] args){
        PischiTeshuvah();
    }
    public static boolean Hargasha (int feeling) {
        Scanner in = new Scanner(System.in);
        switch (feeling) {
            case 1:
                System.out.println("הרגשת זעזוע איברים");
                return true;
            
            case 2:
                System.out.println("הרגשת זיבת דבר לח");
                System.out.println("הקש 1 לדעת החתם סופר, הקש 2 לדעת נודע ביהודה");
                int op = in.nextInt();
                do {
                    if (op == 1) {
                        return false;
                    } else if (op == 2) {
                        return true;
                    }
                } while (true);

            case 3:
                System.out.println("הרגשת פתיחת המקור");
                return true;
            
        }
        return false;
    }
    public static int check (boolean internal, boolean foundBlood, boolean MayRaglayim) {
        if (foundBlood) {
            if (MayRaglayim) {
                System.out.println("טמאה מדאוריתא אף שלא הרגישה - חוות דעת");
                return 1;
            }
            if (internal) {
                System.out.println("יש אומרים שהוא ספק טומאה מדאוריתא - שב יעקב, כתר כהונה, השל''ה\n" +
                        "יש אומרים שהוא טומאה ודאי מדאוריתא - כפתור ופרח, סדרי טהרה, חוות דעת\n");
                return 1;
            } else {
                System.out.println("טמאה מדרבנן");
                return 2;
            }
        }
        System.out.println("טהורה");
        return 3;
    }
    public static void PischiTeshuvah() {
        Scanner in = new Scanner(System.in);
        System.out.println("האם ההרגשה דומה להרגשות מטמאות: \n " +
                "האם ההרגשה היא הרגשת 'זיעזוע איברים'?, אם כן, הקש 1:\n" +
                "האם ההרגשה היא הרגשת 'זיבת דבר לח'? אם כן, הקש 2: \n" +
                "האם ההרגשה היא הרגשת 'פתיחת המקור'? אם כן, הקש 3: ");
        int feeling = in.nextInt();
        if (Hargasha(feeling)) {
            System.out.println("האישה הרגישה הרגשה שמטמאת");
        } else {
            System.out.println("ההרגשה לא מטמאת");
            System.out.println("הכנס true אם בדקה בדיקה פנימית ו false אם בדקה בדיקה חיצונית");
            boolean internal = in.nextBoolean();
            System.out.println("הכנס true אם מצאה דם בבדיקה פנימית, אם לא מצאה, הכנס false");
            boolean foundBlood = in.nextBoolean();
            System.out.println("מצאה במי רגליים? הכנס true או false");
            boolean MeyRaglayim = in.hasNextBoolean();
            check(internal, foundBlood, MeyRaglayim);
        }
    }
}
