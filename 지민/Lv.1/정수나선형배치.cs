using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스.ok
{
    public static class 정수나선형배치
    {
        //파이썬 풀이
        //def solution(n):
        //triangle_slug = [[0] * i for i in range(1, n+1)]
        //r, c, num = -1, 0, 1
        //for i in range(n) :
        //    for _ in range(i, n) :
        //        dir_r, dir_c = DIRS[i % 3]
        //        r, c = r + dir_r, c + dir_c
        //        triangle_slug[r][c] = num
        //        num += 1

        // return sum(triangle_slug, [])
      
        private static int countn(int n)
        {
            int m = 1;
            int[] pibo = new int[n + 1];
            pibo[1] = 1; pibo[2] = 3; pibo[3] = 6;
            if (n>=4)
            {
                for (int i = 4; i < pibo.Length; i++)
                {
                    pibo[i] = (int)Math.Pow(i, 2) - pibo[i - 1];
                }
            }
          
            return pibo[n];
        }
        private static List<List<int>> printSpiralTriangle(int N)
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
        public static int[] solution3(int n)
        {

            List<List<int>> answer = printSpiralTriangle(n);
            //  List<List<int>> answer = printSpiralOrderTriangle(n);
            var number = new List<int>();
            for (int i = 0; i < answer.Count(); i++)
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
        private static int[,] printSpiralOrderTriangle(int N)
        {
           
            // 기본 케이스
            //2-3(4-1), 3- 6(9-3)4- 10(16-6) ,5-15(25-10) 6-21(36-15)
            //	실행한 결괏값 [1,2,15,3,16,14,4,17,13,5,18,19,20,21,12,6,7,8,9,10,11]이
            //	기댓값        [1,
            //	2,15,
            //	3,16,14,4,17,
            //	21,13,5,18,19,20,12,6,7,8,9,10,11]과 다릅니다.
            int[,] mat = new int[N, N];
           
           
            int a = 1;
            int top = 0;
            int left = 0, right = N - 1;
            int index = countn(N);
            // Console.WriteLine(index.ToString());
            while (a <= index)
            {
                if (top > right)
                {
                    break;
                }
                // 왼쪽 변 인쇄

                for (int i = top; i < right; i++)
                {
                    if (a <= index)
                    {
                        mat[i, left] = a++;
                    }
                }
                top++;

                // 맨 밑 변 인쇄
                if (left > right)
                {
                    break;
                }
                for (int i = left; i < right; i++)
                {
                    if (a <= index)
                    {
                        mat[right, i] = a++;
                    }
                    //21에서 ㅇ안꺾임

                }
                left++;

                //오른쪽 변 인쇄
                //  right--;
                for (int i = right; i > top; i--)
                {
                    if (a <= index)
                    {
                        mat[i, right] = a++;
                    }
                   

                }
               
                right--;
                top--;
                if (N > 4)
                {
                   // left++;

                }
                //if (N %2!=0)
                //{
               // left++;

                //}

                // Console.WriteLine(right.ToString());

            }
            return mat;
        }
        private static int[,] printSpiralOrder(int M, int N)
        {
            // 기본 케이스

            // `M × N` 매트릭스 생성
            int[,] mat = new int[M, N];
            int a = 1;
            int top = 0, bottom = M - 1;
            int left = 0, right = N - 1;
            int index = 0;
            while (a <= N * N)
            {
                if (left > right)
                {
                    break;
                }
                // 맨 위 행 인쇄
                for (int i = left; i <= right; i++)
                {
                    mat[top, i] = a++;
                }
                top++;

                if (top > bottom)
                {
                    break;
                }
                // 오른쪽 열 인쇄
                for (int i = top; i <= bottom; i++)
                {
                    mat[i, right] = a++;
                }
                right--;

                if (left > right)
                {
                    break;
                }

                // 맨 아래 행 인쇄
                for (int i = right; i >= left; i--)
                {
                    mat[bottom, i] = a++;
                }
                bottom--;

                if (top > bottom)
                {
                    break;
                }

                // 왼쪽 열 인쇄
                for (int i = bottom; i >= top; i--)
                {
                    mat[i, left] = a++;
                }
                left++;
                right--;
            }
            return mat;
        }
      
    }
}
