using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스.ok
{
    public static class 공원산책
    {
        public static int[] solution(string[] park, string[] routes)
        {
            int[] position = new int[2];
            //
            int sero = park.Length; int garo = park[0].Length;
            int[] aim = new int[] { sero, garo };//세로-1, 가로-1
            //
            //Console.WriteLine(string.Join(" ",공원산책.solution(new string[] { "SOO", "OXX", "OOO" },new string[]{ "E 2", "S 2", "W 1" })));
            //  int[,] direct = { { 1, 0 }, { -1, 0 }, { 0, -1 }, { 0, 1 } };
            //int sindex = Array.IndexOf(park, "s");
            for (int i = 0; i < park.Length; i++)
            {
                for (int j = 0; j < park[i].Length; j++)
                {
                    if (park[i][j] == 'S')
                    {
                        position[0] = i; position[1] = j;
                        break;
                    }

                }
            }

            int[] direct = new int[2];
            //북쪽 남쪽 부호 바꿔야함
            for (int i = 0; i < routes.Length; i++)
            {
                string[] str = routes[i].Split(" ").ToArray();
                int temp = 0;
                switch (str[0])
                {
                    case "N":
                        direct[0] = -1; direct[1] = 0;
                        break;
                    case "S":
                        direct[0] = 1; direct[1] = 0;
                        break;
                    case "W":
                        direct[0] = 0; direct[1] = -1;
                        break;
                    case "E":
                        direct[0] = 0; direct[1] = 1;
                        break;
                }
                int amount = int.Parse(str[1]);
                //directx[i, 0] = amount * direct[temp, 0];
                //directx[i, 1] = amount * direct[temp, 1];
                int tempx = position[0]; int tempy = position[1];
                //if (position[0] + direct[0] * amount < 0 && position[1] + direct[1] * amount < 0)
                //{
                //    if (position[0] < garo && position[1] < sero && park[position[0]][position[1]] != 'X')
                //    {
                //        position[0] += direct[0] * amount;
                //        position[1] += direct[1] * amount;
                //    }
                //}
                for (int k = 0; k < amount; k++)
                {
                    position[0] += direct[0];
                    position[1] += direct[1];

                    if (position[0] < 0 || position[1] < 0 || position[0] >= sero || position[1] >= garo)
                    {

                        position[0] = tempx;
                        position[1] = tempy;
                        break;
                    }
                    else
                    {
                        if (park[position[0]][position[1]] == 'X')
                        {
                            position[0] = tempx;
                            position[1] = tempy;
                            break;
                        }
                    }

                    //    //else
                    //    //{


                    //    //    if (position[0] < 0 || position[1]<0||position[0] > garo || position[1] > sero)
                    //    //    {
                    //    //        position[0] -= direct[0];
                    //    //        position[1] -= direct[1];

                    //    //        //k = amount - 1;
                    //    //    }

                    //    //}
                    //}
                    //for (int k = position[0]; k < park.Length; k++)
                    //{
                    //    for (int l = 0; l < int.Parse(str[1]); l++)
                    //    {
                    //        position[0] += direct[temp, 0];
                    //        position[1] += direct[temp, 1];

                    //    }
                    //}

                }
            }

            //["SOO","OOO","OOO"]	["E 2","S 2","W 1"]	[2,1]

            // int[,] direct = { { 0, 1 }, { 1, 0 }, { 0, -1 }, { -1, 0 } };
            //x<0 || y<0 || x>=n || y >=n || answer[y][x] !=0
            //            int index = 0에서부터 direct 배열 순서로 position을 한 칸씩 이동하다가
            //만약 "x와 y가 0보다 작다 || x와 y가 n보다 같거나 크다 || answer[y][x] != 0" 조건에 걸린다면
            //direct[(index + 1) % 4][0] = y
            //direct[(index + 1) % 4][1] = x
            //의 방향으로 index를 하나씩 증가하여 가고 있던 방향을 틀어야 할 것입니다!
            //즉,
            //position[0] = position[0] + direct[(index + 1) % 4][0];
            //            position[1] = position[1] + direct[(index + 1) % 4][1]; 가 되겠죠??
            //Effective Java 3/E


            return position;
        }
    }
}
