import hello from './hello';
import user from './user';
import { Err } from './err';
import { Gender, GenderMap } from './gender';
import { Native, NativeMap } from './native';

export default {
  hello,
  user,
  UTC: 8, // 时区

  Err, // 错误定义

  Gender, // 性别
  GenderMap,

  Native, // 籍贯
  NativeMap,
};
