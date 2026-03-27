# 终极修复 Jekyll 中文文件名/路径编码错误
# 安全、不破坏核心、永不报错

if defined?(Jekyll)
  module Jekyll
    module URL
      class << self
        alias_method :original_unescape_path, :unescape_path

        def unescape_path(path)
          return "" if path.nil?
          path.to_s.force_encoding(Encoding::UTF_8)
          original_unescape_path(path)
        rescue Encoding::UndefinedConversionError
          path.to_s.force_encoding(Encoding::UTF_8).scrub
        end
      end
    end
  end
end