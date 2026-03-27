# SAFE UTF-8 FIX FOR CHINESE FILENAMES
if defined?(Jekyll)
  module Jekyll
    module Utils
      old_slugify = instance_method(:slugify)
      define_method(:slugify) do |string, mode: nil, cased: false|
        string = string.force_encoding(Encoding::UTF_8) unless string.nil?
        old_slugify.bind(self).call(string, mode: mode, cased: cased)
      rescue
        string.to_s.force_encoding(Encoding::UTF_8).scrub
      end
    end
  end
end