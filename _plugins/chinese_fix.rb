# 零风险 · 强制 UTF-8 编码修复中文文件名
# 不修改 Jekyll 内部类/模块 · 永不冲突

# 1. 强制 Ruby 默认编码为 UTF-8
Encoding.default_external = Encoding::UTF_8
Encoding.default_internal = Encoding::UTF_8

# 2. 安全修复 String 编码转换（底层修复）
class String
  alias_method :original_encode, :encode

  def encode(*args)
    return self if valid_encoding? && encoding == Encoding::UTF_8
    force_encoding(Encoding::UTF_8).scrub
    original_encode(*args)
  rescue Encoding::UndefinedConversionError
    force_encoding(Encoding::UTF_8).scrub
  end
end

# 3. 安全修复 Jekyll 静态文件路径（不碰核心类）
if defined?(Jekyll::StaticFile)
  module Jekyll
    class StaticFile
      alias_method :original_destination, :destination

      def destination(dest)
        path = original_destination(dest)
        path.force_encoding(Encoding::UTF_8).scrub
      rescue
        path
      end
    end
  end
end