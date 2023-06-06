using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스.ok
{
    public static class 문자열나누기
    {
        public static int solution(string st)
        {
            //문자열 나누기  시간초과
            int unt = 0;

            while (st.Length > 0)
            {
                char first = st[0];
                int same = -1; int diff = -1; int temp = 0;

                for (int i = 0; i < st.Length; i++)
                {
                    temp = i + 1;
                    if (st[i] == first)
                    {
                        same++;
                    }
                    else
                    {
                        diff++;
                    }
                    if (same == diff)
                    {
                        break;
                    }

                }
                if (same == diff && st != "")
                {
                 //0~1
                 //aaabbacc ccabba
                 //aaabbacc(0,7)(8)/ ccab(4)/ba(2)
                    st = st.Substring(temp);//8
                    unt++;
                    //Console.WriteLine( temp);
                }
                else
                {// 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료
                    if (st.Length <= temp + 1)
                    {
                        st = "";
                        unt++;
                        break;
                    }
                }


            }
            return unt;
        }
    }
}
