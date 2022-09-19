const createData = (
  id: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) => {
  return { id, name, calories, fat, carbs, protein };
};

export const rows = [
  createData(1, 'フローズンヨーグルト', 159, 6.0, 24, 4.0),
  createData(2, 'アイスクリームサンドイッチ', 237, 9.0, 37, 4.3),
  createData(3, 'エクレア', 262, 16.0, 24, 6.0),
  createData(4, 'カップケーキ', 305, 3.7, 67, 4.3),
  createData(5, 'ジンジャーブレッド', 356, 16.0, 49, 3.9),
  createData(6, '芋もち', 159, 6.0, 24, 4.0),
  createData(7, 'グレープフルーツ', 237, 9.0, 37, 4.3),
  createData(8, 'せんべい', 262, 16.0, 24, 6.0),
  createData(9, '草餅', 305, 3.7, 67, 4.3),
  createData(10, 'まんじゅう', 356, 16.0, 49, 3.9),
  createData(11, '羊羹', 159, 6.0, 24, 4.0),
  createData(12, '今川焼', 237, 9.0, 37, 4.3),
];
