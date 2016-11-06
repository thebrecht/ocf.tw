# modified from: https://gist.github.com/tmtk75/1408402 , http://wolfslittlestore.be/2013/10/rendering-markdown-in-jekyll/

=begin
  Jekyll tag to include Markdown text from _includes directory preprocessing with Liquid.
  Usage:
    {% markdown <filename> %}
  Dependency:
    - kramdown
=end
module Jekyll
  class MarkdownTag < Liquid::Tag

    VARIABLE_SYNTAX = %r!
      (?<variable>[^{]*(\{\{\s*[\w\-\.]+\s*(\|.*)?\}\}[^\s{}]*)+)
      (?<params>.*)
    !x

    def initialize(tag_name, markup, tokens)
      super
      matched = markup.strip.match(VARIABLE_SYNTAX)
      if matched
        @file = matched["variable"].strip
        @params = matched["params"].strip
      else
        @file, @params = markup.strip.split(%r!\s+!, 2)
      end
      @tag_name = tag_name
    end

    def render_variable(context)
      if @file.match(VARIABLE_SYNTAX)
        partial = context.registers[:site]
          .liquid_renderer
          .file("(variable)")
          .parse(@file)
        partial.render!(context)
      end
    end

    require "kramdown"
    def render(context)
      site = context.registers[:site]
      file = render_variable(context) || @file

      tmpl = File.read File.join Dir.pwd, "", file
      tmpl = (Liquid::Template.parse tmpl).render site.site_payload
      html = Kramdown::Document.new(tmpl).to_html
    end
  end
end
Liquid::Template.register_tag('markdown', Jekyll::MarkdownTag)
