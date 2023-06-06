using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스.ok
{
    public static class 주식가격
    {
        public static int[] solution(int[] prices)
        {//격이 떨어지지 않은 기간은 몇 초인지를 return 

            var list = new List<int>();
            for (int k = 0; k < prices.Length; k++)
            {
                int ss = prices[k]; int cnt = 0;

                for (int i = k + 1; i < prices.Length; i++)
                {

                    if (ss <= prices[i])
                    {

                        cnt++;
                    }
                    else
                    {
                        cnt++;
                        break;
                    }

                }
                list.Add(cnt);
            }

            return list.ToArray();
        }
    }
}
