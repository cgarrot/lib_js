export default class lib_cgt {
    randomString(len, an) {
        an = an && an.toLowerCase();
        var str = "",
          i = 0,
          min = an == "a" ? 10 : 0,
          max = an == "n" ? 10 : 62;
        for (; i++ < len;) {
          var r = Math.random() * (max - min) + min << 0;
          str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
        }
        return str;
    }

    formatName(mail) {
        let name = mail.substring(0, mail.indexOf("@")).replace(".", " ");
        name = name.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
        return name
    }
}