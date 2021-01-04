package src;

import java.util.Arrays;

public class CodeWars {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(solve(new int[]{15,11,10,7,12})));
    }
    public static int[] solve (int[] arr){  
        int[] arr2 = new int[arr.length];
        for(int i = arr.length - 1; i > 0; i--){
          if (arr[i] > arr[i-1]) {
            int temp = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = temp;
          }
        }
        System.out.println(Arrays.toString(arr));
        int x = 0;
        int y = 0;
        while (x < arr2.length) {
            arr2[x] = arr[y];
            y++;
            x+=2;
        }
    return arr2;
    }
}
