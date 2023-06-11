/*
문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/92341
 */

import java.util.*;

class Solution {
    public int[] solution(int[] fees, String[] records) {
        Hashtable<String, Integer> car_list = new Hashtable<String, Integer>();
        Hashtable<String, Integer> car_total_time_list = new Hashtable<String, Integer>();

        for (int car_record = 0; car_record < records.length; car_record++) {
            // fees -> 빈칸 기준으로 자르기
            String[] parking_info = records[car_record].split(" ");

            // record에서 가져온 입/출차 시간을 String -> Integer 변경
            String[] split_time = parking_info[0].split(":");
            Integer parking_time = (Integer.parseInt(split_time[0]) * 60) + (Integer.parseInt(split_time[1]));

            Integer entrance_time = car_list.get(parking_info[1]);
            // 처음 입차한 차량일 경우
            if (entrance_time == null) {
                // car_list에 put (key : 차량 번호, value : 입차 시간)
                car_list.put(parking_info[1], parking_time);

            } else {
                // 출입한 이력이 있는데 출입 record가 들어올 경우, 해당 차량 삭제 후 skip
                if (parking_info[2].equals("IN")) {
                    car_list.remove(parking_info[1]);
                    continue;
                }

                Integer usage_time = car_total_time_list.get(parking_info[1]);
                if (usage_time == null) {
                    car_total_time_list.put(parking_info[1], parking_time - entrance_time);

                } else {
                    car_total_time_list.put(parking_info[1], usage_time + (parking_time - entrance_time));
                }

                // car list에서 삭제
                car_list.remove(parking_info[1]);
            }
        }

        // car list에 출차하지 않는 차량이 남아 있을 경우, 출차 시간 23:59분으로 정산
        Enumeration<String> en = car_list.keys();

        while(en.hasMoreElements()) {
            String car_num = en.nextElement().toString();
            Integer entrance_time = car_list.get(car_num);

            Integer usage_time = car_total_time_list.get(car_num);
            if (usage_time == null) {
                car_total_time_list.put(car_num, (23 * 60 + 59) - entrance_time);

            } else {
                car_total_time_list.put(car_num, usage_time + ((23 * 60 + 59) - entrance_time));
            }

            // car list에서 삭제
            car_list.remove(car_num);
        }

        // 주차 요금 정산
        List<Integer> cost_list = new ArrayList<>();
        List<String> keyList = new ArrayList<String>(car_total_time_list.keySet());
        Collections.sort(keyList);

        for (String key : keyList) {
            Integer total_time = car_total_time_list.get(key);
            Integer total_cost = 0;

            if (total_time < fees[0]) {
                total_cost = fees[1];

            } else {
                total_cost = fees[1] + (int) Math.ceil((total_time - fees[0]) / (double) fees[2]) * fees[3];
            }

            cost_list.add(total_cost);
        }

        int[] answer = cost_list.stream()
                .mapToInt(i -> i)
                .toArray();

        return answer;
    }
}