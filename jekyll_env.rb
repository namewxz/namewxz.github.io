# 强制编码为UTF-8，支持中文文件名/文件夹，无冲突
ENV['LANG'] = 'en_US.UTF-8'
ENV['LC_ALL'] = 'en_US.UTF-8'
Encoding.default_external = Encoding::UTF_8
Encoding.default_internal = Encoding::UTF_8

# 修复Jekyll中文路径核心
module Jekyll
  module Utils
    def self.slugify(string, mode: nil, cased: false)
      string.force_encoding(Encoding::UTF_8)
      super
    rescue
      string.force_encoding(Encoding::UTF_8).scrub
    end
  end
end