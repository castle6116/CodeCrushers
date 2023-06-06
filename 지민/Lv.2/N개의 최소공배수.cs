using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    internal class N개의_최소공배수
    {
        public int solution(int[] arr)
        {
            arr =new int[] { 2,6,8,14};
            int maxyak = 0;
            for (int i = 1; i < arr.Length; i++)
            {
                maxyak = arr[i - 1] * arr[i] / Enumerable.Range(1, arr[i - 1]).Where(x => arr[i - 1] % x == 0 && arr[i] % x == 0).Max();

                arr[i] = maxyak;
            }
         
            return maxyak;
        }
    }
}
