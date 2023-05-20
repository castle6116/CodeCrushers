using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스
{
    internal class 멀리뛰기
    {
        public long solution(int n)
        {
            //한번에 한칸 또는 두칸
            // 2  2  (1,1) (2)
            // 3  3 (2,1)(1,2)(1,1,1)
            // 4  5 (1,1,1,1)(1,2,2,1)(1,1,2,2)(2,2,1,1)(2,2,2,2) 2+3
           
            if (n<3)
            {
                return n;
            }
             
                int[] pibo = new int[n + 1];//밖에있으면 메모리때문에 막힘
                pibo[0] = 0; pibo[1] = 1; pibo[2] = 2;
                for (int i = 3; i < pibo.Length; i++)
                {
                    pibo[i] = pibo[i - 1] % 1234567 + pibo[i - 2] % 1234567;
                  
                }
            long answer = pibo[n] % 1234567;
           
            return answer;
        }
        
    }
}
