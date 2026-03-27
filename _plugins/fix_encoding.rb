# 修复 Jekyll 中文文件名编码错误
module Jekyll
  module URL
    def self.unescape_path(path)
      return path unless path.include?('%')

      decoded = CGI.unescape(path)
      decoded.force_encoding('UTF-8')
      decoded.scrub # 强制修复无效字符
    rescue
      path.force_encoding('UTF-8').scrub
    end
  end
end