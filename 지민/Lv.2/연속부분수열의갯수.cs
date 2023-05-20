using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스.ok
{
    public static class 연속부분수열의갯수
    {
        public static int solution(int[] elements)
        {
            int cnt = 0;
            //연속하는 부분 수열의 합으로 만들 수 있는 수가 모두 몇 가지
            // 7 9  1 1 4
            // 1인 연속 부분 수열로부터 [1, 4, 7, 9] 네 가지의 합
            // 길이가 2인 연속 부분 수열로부터[2, 5, 10, 11, 16] 다섯 가지의 합이 나올 수 있습니다.
            // 길이가 3인 연속 부분 수열로부터[6, 11, 12, 17, 20] 다섯 가지의 합이 나올 수 있습니다.
            // 길이가 4인 연속 부분 수열로부터[13, 15, 18, 21] 네 가지의 합이 나올 수 있습니다.
            // 길이가 5인 연속 부분 수열로부터[22] 한 가지의 합이 나올 수 있습니다.
            // 이들 중 중복되는 값을 제외하면 다음과 같은 18가지의 수들을 얻습니다.
            // [1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22]
            var list = new List<int>();
            for (int i = 0; i < elements.Length; i++)
            {
                cnt = i + 1;
                if (cnt == 1)
                {
                    list.AddRange(elements.Distinct());
                }
                else if (cnt >= 2)
                {
                    for (int k = 0; k < elements.Length; k++)
                    {
                        int answer = 0;
                        for (int j = k; j < cnt + k; j++)
                        {
                            int index = j;
                            if (j >= elements.Length)
                            {
                                index = j % elements.Length;
                            }

                            answer += elements[index];
                        }
                        list.Add(answer);
                    }
                }
            }
            return list.Distinct().Count();
        }
    }
}
