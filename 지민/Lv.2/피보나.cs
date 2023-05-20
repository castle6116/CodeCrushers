using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    internal class 피보나
    {
        public int solution(int n)
        {
            int[] pibo = new int[n + 1];
            pibo[0] = 0; pibo[1] = 1; pibo[2] = 1;
            for (int i = 3; i < pibo.Length; i++)
            {
                pibo[i] = pibo[i - 1] % 1234567 + pibo[i - 2] % 1234567;
            }

            return pibo[n] % 1234567;
        }
    }
}
