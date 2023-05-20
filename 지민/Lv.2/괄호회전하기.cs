using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 프로그래머스.ok
{
    public class 괄호회전하기
    {
        public static int solution(string s)
        {
            int answer = 0;

            string g1 = "()";
            string g2 = "[]";
            string g3 = "{}";

            string str = s;
            string tempStr = s;

            for (int i = 0; i < str.Length; i++)
            {
                tempStr = str;
                int j = 0;
                while (j <= str.Length / 2) //길이/2를 반복 수행하면서 제거함
                {
                    if (tempStr.Contains(g1)) tempStr = tempStr.Replace(g1, "");
                    if (tempStr.Contains(g2)) tempStr = tempStr.Replace(g2, "");
                    if (tempStr.Contains(g3)) tempStr = tempStr.Replace(g3, "");
                    j++;
                }
                if (tempStr.Length == 0) answer++; //모두 제거가되면 answer+1

                char c = str[0];
                string content = str.Substring(1, str.Length - 1);
                str = content + c;
            }
            return answer;
        }
        //스택, queue 이용한 풀이
        //Dequeue 시작부분 값 제거,Enqueue 중간에 있는 값 제거
        //스택 Peek: 줄맨앞의 데이터를 읽어온다
        //Pop: 맨 위의 데이터를 지우고 반환
        public int solution2(string s)
        {
            int answer = 0;
            var stack = new Stack<char>();
            var queue = new Queue<char>();
            foreach (var item in s)
                queue.Enqueue(item);
            for (int i = 0; i < queue.Count - 1; i++)
            {
                stack.Clear();
                answer += Check(queue, stack);
                queue.Enqueue(queue.Dequeue());
            }

            return answer;
        }

        private int Check(Queue<char> queue, Stack<char> stack)
        {
            foreach (var item in queue)
            {
                if (item == '[' || item == '(' || item == '{')
                    stack.Push(item);
                else if (stack.Count == 0)
                    return 0;
                else if (stack.Peek() == '[' && item != ']')
                    return 0;
                else if (stack.Peek() == '(' && item != ')')
                    return 0;
                else if (stack.Peek() == '{' && item != '}')
                    return 0;
                else
                    stack.Pop();
            }
            if (stack.Count != 0)
                return 0;

            return 1;
        }
        //public static int solution(string s)
        //{
        //    int answer = 0;
        //    var schar = s.ToCharArray().ToList();
        //    for (int i = 0; i < schar.Count-1; i++)
        //    {

        //        string c = String.Join("", schar);
        //        if (remove(c, "()") && remove(c, "{}"))
        //        {
        //            if (remove(c, "[]"))
        //            {
        //                answer++;
        //            }

        //        }
        //        char temp = schar[0];
        //        schar.RemoveAt(0);
        //        schar.Add(temp);

        //    }
        //    return answer;
        //}
        public static bool remove(string s, string check)
        {

            bool answer = false;
            var chars = s.ToCharArray().ToList();
            var checkchar = check.ToCharArray();
            int open = 0;
            if (chars[0] != checkchar[1])
            {
                int k = chars.IndexOf(checkchar[0]);
                if (k != -1)
                {
                    for (int i = k; i < chars.Count; i++)
                    {
                        if (chars[i] == checkchar[0])
                        {
                            open++;
                        }
                        else if (chars[i] == checkchar[1])
                        {
                            open--;
                        }
                    }
                }
                answer = open == 0 ? true : false;

            }
            return answer;
        }

    }
}
