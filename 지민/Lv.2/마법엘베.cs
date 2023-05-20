using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스.ok
{
    public static class 마법엘베
    {
        public static int solution(int storey)
        {
            int push = 0;
            int leg = Math.Abs(storey).ToString().Length;
            int aim = (int)Math.Pow(10, leg);
            bool up = aim / 2 > storey;
            // 646 -4 -5 +3(이경우 5를 올림해줘야함..다음수가 5이상인경우 영향) -1	(13) 678  2 2 3 1  (8)
            //1 3 12  511 5 
            while (storey > 0)
            {
                int temp = storey % 10;
                // elif n == 5 and (storey // 10) % 10 >= 5:
                if (temp > 5)
                {
                    push += 10 - temp;
                    storey += 10 - temp;

                }
                else if (temp == 5 && storey / 10 % 10 >= 5)
                {
                    push += temp;
                    storey += temp;

                }
                else
                {
                    push += temp;
                    //storey -= temp;

                }
                storey = storey / 10;
                //   Console.WriteLine(push.ToString());
            }

            return push;
        }
    }
}
