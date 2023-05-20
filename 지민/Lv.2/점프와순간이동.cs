using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스.ok
{
    public static class 점프와순간이동
    {
        public static int solution(int n)
        {
            // 5 2 6 2 500 5
            // K 칸을 앞으로 점프하거나, (현재까지 온 거리) x 2 에 해당하는 위치로 순간이동
            // K 칸을 점프하면 K 만큼의 건전지 사용량이 듭니다  건전지 사용량의 최솟값을 return
            //처음 위치 0 에서 2 칸을 앞으로 점프한 다음 순간이동 하면 (현재까지 온 거리 : 2)
            //x 2에 해당하는 위치로 이동할 수 있으므로 위치 4로 이동합니다. 이때 1 칸을 앞으로 점프하면 도착하므로 건전지 사용량이 3 
            int jump = 0; int state = 0;
            while (n >= 1)
            {
                if (n % 2 == 0)
                {
                    n = n / 2;
                    //
                }
                else
                {
                    n = n / 2;
                    jump++;
                }

            }
            //while (n >=1)
            //{
            //    if (n == 0)
            //    if (n >= 2 * state)
            //    {
            //        n -= 2 * state;
            //        state += 2 * state;
            //    }

            //    //while (n >= 2 * state)
            //    //{
            //    //    n -= 2 * state;
            //    //    state += 2 * state;
            //    //    if (n == 0) { break; }
            //    //}
            //    if (n <= 0) { break; }
            //    else
            //    {
            //        state++;
            //        jump++;
            //        n--;
            //    }
            //}
            return jump;
        }
    }
}
