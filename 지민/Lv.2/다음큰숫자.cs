using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스.ok
{
    public static class 다음큰숫자
    {
        public static int solution(int n)
        {
            int answer = 0;
            string n2 = Convert.ToString(n, 2);
            int onecount = n2.Count(x => x == '1');
            // int onecount = ncha.Where(x => x == '1').Count();시간복잡도 2배걸림;;
            for (int i = 1; i <= n; i++)
            {
                string cha = Convert.ToString(i + n, 2);//1111
                if (cha.Count(x => x == '1') == onecount)
                {
                    answer = i;
                    return n + i;
                }
            }
            return answer;

            //비트 연산자 이용 풀이      
            //const solution = (n) => {
            //    const rightOne = n & -n;
            //    const nextHigherOneBit = n + rightOne;
            //    const rightOnesPattern = (n ^ nextHigherOneBit) / rightOne >> 2;
            //    const next = nextHigherOneBit | rightOnesPattern;
            //    return next;
            //};
        }
    }
}
