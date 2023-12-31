function euclideanDistance(p1, p2) {
  // 두 점이 N차원으로 같은 공간에 있는지 확인
  if (p1.length !== p2.length) {
    throw new Error("계산할 수 없는 거리입니다.");
  }

  // 피타고라스 법칙을 활용해 N좌표의 차의 절댓값을 구하기 위해 제곱한 값을 모두 더한 후 제곱근 반환
  let sqDist = 0;
  for (let i = 0; i < p1.length; i++) {
    sqDist += (p2[i] - p1[i]) ** 2;
  }

  return sqDist ** 0.5;
}

// 0, 0 의 좌표에서 3, 4의 좌표까지의 거리는 5이다.
const result = euclideanDistance([0, 0], [3, 4]);
console.log(result); // 5
