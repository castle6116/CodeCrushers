using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스.ok
{
    internal class 삼각달팽이
    {
        // 다음 그림과 같이 밑변의 길이와 높이가 n인
        // 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후,
        // 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return
        //5	[1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
        private int countn(int n)
        {
            int[] pibo = new int[n + 1];
            pibo[1] = 1; pibo[2] = 3; pibo[3] = 6;
            if (n >= 4)
            {
                for (int i = 4; i < pibo.Length; i++)
                {
                    pibo[i] = (int)Math.Pow(i, 2) - pibo[i - 1];
                }
            }
            return pibo[n];
        }
        private List<List<int>> printSpiralTriangle(int N)
        {
            List<List<int>> number = new List<List<int>>();

            //  int[,] number = new int[N, N];
            for (int i = 1; i <= N; i++)
            {

                var list = new List<int>();

                for (int j = 0; j < i; j++)
                {
                    list.Add(0);

                }
                number.Add(list);

            }

            int a = 1;
            // int top = 0;
            //int left = 0, right = N - 1;
            int[,] direct = new int[,] { { 1, 0 }, { 0, 1 }, { -1, -1 } };

            int x = 0; int y = 0;
            int ny = 0; int nx = 0;
            int index = N * (N + 1) / 2;
            int d = 0;
            //number[0][0] = 0;
            while (a <= index)
            {

                number[x][y] = a;
                a++;
                ny = y + direct[d, 1];
                nx = x + direct[d, 0];
                if (0 <= nx && nx < N && 0 <= ny && nx >= ny && number[nx][ny] == 0)
                {
                    x = nx; y = ny;
                }
                else
                {
                    d = (d + 1) % 3;
                    y += direct[d, 1];
                    x += direct[d, 0];
                }

            }
            return number;
        }
        public int[] solution(int n)
        {

            List<List<int>> answer = printSpiralTriangle(n);
            //  List<List<int>> answer = printSpiralOrderTriangle(n);
            var number = new List<int>();
            for (int i = 0; i < n; i++)
            {

                var list = answer[i];

                for (int j = 0; j < list.Count; j++)
                {
                    // Console.Write(list[j].ToString());
                    number.Add(list[j]);
                }
                //  Console.WriteLine();

            }
            return number.ToArray();
        }
    }
}
