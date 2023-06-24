using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스
{
    public class 카펫
    {
        public static int[] solution(int brown, int yellow)
        {
            //가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
            //10  2[4, 3]
            //8   1[3, 3]
            //24  24[8, 6]
            int hap = brown + yellow;
            var list = new List<int>();
            var listy = new List<int>();
            int[] answer = new int[2] ;
            for (int i = 3; i <= brown; i++)
            {
                if (hap%i==0)
                {
                    list.Add(hap / i);
                    listy.Add(i);
                }
            }
            for (int i = 0; i < list.Count; i++)
            {
                if ((listy[i]-2)* (list[i] - 2)==yellow&& listy[i]<= list[i])
                {
                    answer = new int[] { list[i], listy[i] };
                   
                }
            }

            return answer;
        }
    }
}
