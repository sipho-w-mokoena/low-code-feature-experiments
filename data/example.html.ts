export const exampleHtml = `<html lang="en"><head>
<!-- THIS IS A COMMENT -->
<title>Sample Web Page</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
blockquote { margin-left:20px; margin-right:5px }
pre { overflow-x:auto }
.tt { font-family:monospace }
.nowrap { white-space:nowrap }
.example { font-family:monospace; white-space:pre; overflow-x:auto; }
h3 { border-top:1px solid grey }
blockquote { margin-top:0; margin-bottom:0 }
table.compact { border-collapse:collapse }
table.compact th { text-align:left; background:#eeeeee }
table.compact td,th { padding:0 4px 0 8px; border:1px solid grey }
</style>
</head>

<body style="width:96%; max-width:720px">

<h2>Do-It-Yourself Web Authoring - a beginner's HTML tutorial</h2>
<!-- How to insert an image -->
<img alt="Sample image" title="title=&quot;Text to show when mouse is hovered over this image&quot;" src="picture-of-something.jpg" style="width:100%;">
<br>
<span style="font-size:84%">
<i>A random photo...</i>  (The Hudson River at 125th Street about 2002)
</span>

<p>

<a href="http://www.columbia.edu/~fdc/">Frank da Cruz</a>
<br>
<small><i>Updated in 2019 and 2021 for HTML5 and "fluidity".</i></small>

</p><p>

This page shows how to create Web pages by hand, the original way.  Although
today most Web pages are created by "Web authoring systems" that are
designed to shield you from technical details, the fact is that HTML
(the "programming" language of the Web) is not that difficult, as you can
see if you follow this tutorial.  To get an idea of what is possible with
this technique, see these 100% hand-made websites:

</p><ul>
<li><a href="https://kermitproject.org/newdeal/">The New Deal in New
York City 1933-1943</a>
</li><li><a href="http://www.columbia.edu/cu/computinghistory">The History of
Computing at Columbia University 1890-2005</a>
</li><li><a href="http://www.columbia.edu/~fdc/family/dcmall.html">The Washington
DC Nation Mall in World War II</a>
</li><li><a href="http://www.columbia.edu/~fdc/family/hallshill.html">Arlington,
Virginia, 1956-61: The Hall's Hill Segregation Wall</a>
</li><li><a href="http://www.columbia.edu/~fdc/family/frankfurt.html">Frankfurt,
Germany, 1959-61</a>

</li></ul>

<h3 id="contents">CONTENTS</h3>

<ol>
<li><a href="#basics">Creating a Web Page</a>
</li><li><a href="#syntax">HTML Syntax</a>
</li><li><a href="#chars">Special Characters</a>
</li><li><a href="#convert">Converting Plain Text to HTML</a>
</li><li><a href="#effects">Effects</a>
</li><li><a href="#lists">Lists</a>
</li><li><a href="#links">Links</a>
</li><li><a href="#tables">Tables</a>
</li><li><a href="#viewing">Viewing your Web page</a>
</li><li><a href="#install">Installing your Web Page on the Internet</a>
</li><li><a href="#more">Where to go from here</a>
</li><li><a href="#fluid">Postscript: Cell Phones</a>
</li></ol>
<p>

You can create a Web page on your desktop computer but nobody can see it but
you.  If your want other people to be able to see your Web pages, you need
an account on a computer that has a Web server.  Nowadays most people have
their own computers on their desks, but normally they don't have Web servers
and anyway you don't want the whole world coming into your desktop computer
to see your web page because (a) it's not designed for that, and (b) who
knows what else they might see.  And (c) for security reasons, Web servers
should be managed by professionals.  Most institutions have big central
shared computers for this purpose, which usually have
a <a href="http://kermitproject.org/unix.html">Unix</a>-like operating
system such as Linux.  You need an account on one of these so you can put
your web pages there.  If you don't have access to such a computer, you can get
a low-cost account on a service like <a href="http://panix.com">Panix.com</a>.

</p><p>

You can still create Web pages on your own computer and look at them with
your computer's Web browser, but for other people to see them, you have to
upload them to the "big" computer that has the Web browser.  The rest of
this document is about how to create your first Web page.

</p><h3 id="basics">1. Creating a Web Page</h3>

This page was typed by hand.  Anybody can do this, you don't need any
special "web creation" tools or HTML editors, and the pages you make can be
viewed from any browser.  To see how this page was made, choose
<b>View Source</b> (or View Page Source, or View Document Source) in your
browser's menu (or — in at least Chrome and Firefox — Ctrl-U on
your keyboard).  A simple web page like this one is just plain text with
HTML commands (markup) mixed in.  HTML commands (properly called "tags")
themselves are plain text.

<p>

When you're just learning and want to experiment, you can do everything on
your PC.  Create a new directory ("folder") for your website, and then put
the web-page files (HTML plus any pictures) in it.  Use NotePad or other
plain-text editor (not word processor) on your PC to create your "home page",
a file named
<span class="tt">index.html</span>, which you can view locally with your Web
browser.  (You can also use a word processors such as Word or WordPad if you
save in "plain text", "text", "text document", or "text document MS-DOS
format".)
<a href="#install">Later</a> I'll explain how you can install your web site on
the Internet.

</p><p>

Once you've made your "home page" (index.html) you can add more pages to
your site, and your home page can link to them.

</p><h3 id="syntax">2. HTML Syntax</h3>

Web pages are written in Hyper Text Markup Language (HTML).  HTML has three
special characters:
<span class="tt">&lt;</span>, <span class="tt">&amp;</span>, <span class="tt">&gt;</span>.
An HTML command is enclosed in <span class="tt">&lt;...&gt;</span>, for example 
<span class="tt">&lt;p&gt;</span>, which is a paragraph separator, or <span class="tt">&lt;b&gt;</span>
("begin bold") and <span class="tt">&lt;/b&gt;</span> ("end bold").  So the following
HTML text:

<div style="overflow-x:auto">
<blockquote>
<pre>This sentence contains &lt;b&gt;bold&lt;/b&gt; text.
</pre>
</blockquote>
</div>

produces:

<p>
</p><div style="overflow-x:auto">
<blockquote>
This sentence contains <b>bold</b> text.
</blockquote>
</div>
<p>

A Web page starts with a series of HTML commands, and ends with
a few more.  The contents go in between:

</p><p>
</p><div style="overflow-x:auto">
<blockquote>
<pre>&lt;!DOCTYPE HTML&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;META charset="UTF-8"&gt;
&lt;META name="viewport"
 content="width=device-width, initial-scale=1.0"&gt;
&lt;title&gt;Sample Web Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
</pre>
<p>
<i>(Contents go here)</i>
</p><p>
</p><pre>&lt;/body&gt;
&lt;/html&gt;
</pre>
</blockquote>
</div>
<p>

The first line (<span class="tt">DOCTYPE</span>) specifies which markup
language the page uses
(<a href="https://en.wikipedia.org/wiki/HTML">HTML</a> = Hypertext Markup
Language); just copy this line.  The next
line, <span class="tt">&lt;html&nbsp;lang="en"&gt;</span>, starts the page
and specifies
the (human) language it is written in (language codes are specified
<a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">here</a>),
and is matched by the line 
<span class="tt">&lt;/html&gt;</span>, which closes the
page.  <span class="tt">&lt;head&gt;</span> starts the heading, which
contains a title to be displayed on the browser's title bar and a
declaration of the character set (nowadays it should always be
<a href="https://en.wikipedia.org/wiki/UTF-8">UTF-8</a>) and the "viewport"
line which is a compulsory adaptation for cell phones, "smart" watches, etc.
<span class="tt">&lt;/head&gt;</span> closes the heading.  The head can also
contain other items such as style parameters that you can learn about later;
for example by asking Google ("HTML how do&nbsp;I change the font size?").

</p><p>

The <span class="tt">&lt;body&gt;</span> tag starts the body of the
document, is closed by <span class="tt">&lt;/body&gt;</span> tag.

</p><p>

As you can see, most HTML commands come in begin-end pairs:
<span class="tt">&lt;b&gt;...&lt;/b&gt;</span>,
<span class="tt">&lt;head&gt;...&lt;/head&gt;</span>, etc.  The closing part of the command
has a slash (<span class="tt">/</span>) between the <span class="tt">&lt;</span> and the first letter of
the command.

</p><p>

Blank lines and line breaks are ignored.  The browser automatically "flows"
your text into lines and paragraphs that fit in its window.  Paragraphs must
be separated by <span class="tt">&lt;p&gt;</span>.  Line breaks can be
forced by <span class="tt">&lt;br&gt;</span>.

</p><p>
</p><dl>
<dt><i>Example for Windows:</i>

</dt><dd>Use the mouse to copy the HTML above into NotePad.  Then save the file
(<i>File</i>&nbsp;<span class="tt">-&gt;</span>&nbsp;<i>Save&nbsp;As...</i>)
in your Web directory as <span class="tt">index.html</span>.  Suppose your Windows username
is Olga.  Then (depending on which version of Windows you have) this might
be:

<div style="overflow-x:auto">
<blockquote>
<pre><span class="tt">C:\Users\Olga\Desktop\Web\index.html</span>
</pre>
</blockquote>
</div>

Now to see your new web page, just double-click on the Web folder and
then double-click on <span class="tt">index.html</span>.
</dd></dl>
<p>

Now you're ready to start adding "content" to your web page.  Go back to
NotePad and replace the title and "(Contents go here)" with whatever you
want.  Any time you want to see the result, use
<i>File</i>&nbsp;<span class="tt">-&gt;</span>&nbsp;<i>Save</i> in NotePad and then
click the Reload button on your browser.

</p><p>

The next sections tell how to achieve different kinds of effects.

</p><h3 id="chars">3. Special Characters</h3>

HTML special "character entities" start with ampersand (<span class="tt">&amp;</span>) and
end with semicolon (<span class="tt">;</span>), like "<span class="tt">&amp;euro;</span>" = "€".  The
ever-popular "no-break space" is <span class="tt">&amp;nbsp;</span>.  There are special
entity names for accented Latin letters and other West European special
characters such as:

<p>
</p><div style="overflow-x:auto">
<blockquote>
<table border="">
<tbody><tr>
<td><span class="tt">&amp;auml;</span>
</td><td>a-umlaut
</td><td>&nbsp;ä&nbsp;

</td></tr><tr>
<td><span class="tt">&amp;Auml;</span>
</td><td>A-umlaut 
</td><td>&nbsp;Ä&nbsp;

</td></tr><tr>
<td><span class="tt">&amp;aacute;</span>
</td><td>a-acute 
</td><td>&nbsp;á&nbsp;

</td></tr><tr>
<td><span class="tt">&amp;agrave;</span>
</td><td>a-grave 
</td><td>&nbsp;à&nbsp;

</td></tr><tr>
<td><span class="tt">&amp;ntilde;</span>
</td><td>n-tilde 
</td><td>&nbsp;ñ&nbsp;

</td></tr><tr>
<td><span class="tt">&amp;szlig;</span>
</td><td>German double-s
</td><td>&nbsp;ß&nbsp;

</td></tr><tr>
<td><span class="tt">&amp;thorn;</span>
</td><td>Icelandic thorn 
</td><td>&nbsp;þ&nbsp;
</td></tr></tbody></table>
</blockquote>
</div>
<p>

(The table above is shown in the basic, default style of HTML.  Of course
there are many ways to customize the appearance of tables; more
about this <a href="#tables">below</a>.

</p><p>

</p><div style="overflow-x:auto">
Examples:

<dl>
<dt>For <b>Spanish</b> you would need:
</dt><dd><span class="tt">&amp;Aacute;</span> (Á),
<span class="tt">&amp;aacute;</span> (á),
<span class="tt">&amp;Eacute;</span> (É),
<span class="tt">&amp;eacute;</span> (é),
<span class="tt">&amp;Iacute;</span> (Í),
<span class="tt">&amp;iacute;</span> (í),
<span class="tt">&amp;Oacute;</span> (Ó),
<span class="tt">&amp;oacute;</span> (ó),
<span class="tt">&amp;Uacute;</span> (ú),
<span class="tt">&amp;uacute;</span> (ú),
<span class="tt">&amp;Uuml;</span> (Ü),
<span class="tt">&amp;uuml;</span> (ü),
<span class="tt">&amp;Ntilde;</span> (Ñ),
<span class="tt">&amp;ntilde;</span> (ñ);
<span class="tt">&amp;iquest;</span> (¿);
<span class="tt">&amp;iexcl;</span> (¡).<br>
Example: Añorarán = <span class="tt">A&amp;ntilde;orar&amp;aacute;n</span>.

<p>

</p></dd><dt>For <b>German</b> you would need:
</dt><dd><span class="tt">&amp;Auml;</span> (Ä),
<span class="tt">&amp;auml;</span> (ä),
<span class="tt">&amp;Ouml;</span> (Ö),
<span class="tt">&amp;ouml;</span> (ö),
<span class="tt">&amp;Uuml;</span> (ü),
<span class="tt">&amp;uuml;</span> (ü),
<span class="tt">&amp;szlig;</span> (ß).<br>
Example: Grüße aus Köln = <span class="tt">Gr&amp;uuml;&amp;szlig;e aus K&amp;ouml;ln</span>.

</dd></dl>
</div>

<a href="entities.html">CLICK HERE</a>
for a complete list.  When the page encoding is
<a href="https://en.wikipedia.org/wiki/UTF-8">UTF-8</a>, which is
recommended, you can also enter any character at all, Roman,
Cyrillic, Arabic, Hebrew, Greek. Japanese,
etc, either as numeric entities or (if you have a way to type them) directly
from the keyboard.

<p>

And remember: if you want to
include <span class="tt">&lt;</span>, <span class="tt">&amp;</span>,
or <span class="tt">&gt;</span> literally in text to be displayed, you have
to write <span class="tt">&amp;lt;</span>,
<span class="tt">&amp;amp;</span>, <span class="tt">&amp;gt;</span>, respectively.

</p><h3 id="convert">4. Converting Plain Text to HTML</h3>

If you have a plain text file that you want to convert to HTML, load the
file into a plain-text editor and then follow these steps.

<p>
</p><ol>
<li>Change all occurrences of "<span class="tt">&amp;</span>" to "<span class="tt">&amp;amp;</span>".
</li><li>Change all occurrences of "<span class="tt">&lt;</span>" to "<span class="tt">&amp;lt;</span>".
</li><li>Change all occurrences of "<span class="tt">&gt;</span>" to "<span class="tt">&amp;gt;</span>".
</li><li>Change any accented letters to HTML entity names (previous section)*.
</li><li>Put "<span class="tt">&lt;p&gt;</span>" between each paragraph.
</li><li>Insert the standard prolog at the top, substituting an appropriate title.
</li><li>Add <span class="tt">&lt;/body&gt;</span> and
 <span class="tt">&lt;/html&gt;</span> at the end.
</li><li>Save the result as <span class="tt"><i>xxx</i>.html</span>, where
<span class="tt"><i>xxx</i></span> is the part of the original file's name
before the dot, or whatever-else-you-want-to-call-it.html.
</li></ol>
<p>

If you are a <a href="http://kermitproject.org/about.html">Kermit</a> user, you
can find a script to convert plain text to HTML
<a href="http://kermitproject.org/html.html">HERE</a>.

</p><p>

If the text contains lists, tables, or other structures, read on.

</p><p>

If you have a Microsoft Word document you want to convert to HTML, and your
copy of Word does not allow the file to be "Saved As" HTML, then save it as
plain text and follow the same instructions.  In this case you lose the
"richness" (bold, italics, font changes, etc) when you save the file, and
will have to put the effects back by hand (next section).

</p><p>
</p><table style="font-size:80%; width:66%; border-top:1px solid black;">
<tbody><tr>
<td style="vertical-align:top; font-size:18px">*
</td><td> Not necessary if your text is already encoded as UTF-8.  If it's not
UTF-8, you can identify the encoding in the &lt;META charset="..."&gt;
directive, but this topic is a bit advanced for this simple tutorial.
</td></tr></tbody></table>

<h3 id="effects">5. Effects</h3>

The rest of this document shows some of what you can do with simple HTML
commands, but I don't explain how to do it.  To see that, just tell your
browser to <b>View Source</b> and compare the HTML in the source window with
the result in the original window.

<p>
</p><div style="overflow-x:auto">
<blockquote>

<i>Note:</i> In this and the following
sections, I use some "deprecated" features from earlier HTML versions
because they are easier for beginners to learn (for
example <span class="tt">&lt;big&gt;...&lt;/big&gt;</span> versus
<span class="tt" style="white-space:pre">
&lt;span style="font-size:120%"&gt;...&lt;/span&gt;</span>).

</blockquote>
</div>

<p>

<b>This sentence is bold.</b> <i>This sentence is
in italics.</i> <b><i>This sentence is in bold italics.</i></b> <span class="tt">This
sentence is in typewriter font.</span> This sentence has <u>underlined
words</u> and <u><b>underlined bold words</b></u>.

<font color="blue">This</font>
<font color="red">sentence</font>
<font color="green">has</font>
<font color="brown">colored</font>
<font color="magenta">words</font>.

This sentence has <big>big
words.</big> This one has <big><big>very big words</big></big>.  This one has
<small><small>very small words.</small></small>

</p><p>
</p><blockquote>

This is a "blockquote", which is like a regular paragraph, but it has bigger
margins.  Begin a blockquote with <span class="tt">&lt;blockquote&gt;</span> and end
it with <span class="tt">&lt;/blockquote&gt;</span>.  Environments such as blockquotes,
lists, etc, that have a beginning and an end always use paired commands like
<span class="tt">&lt;<i>blah</i>&gt;...&lt;<i>/blah</i>&gt;</span>.

<p>
</p><blockquote>

This is a blockquote inside another blockquote, which shows how HTML
environments can be "nested".

</blockquote>
<p>

Here we are back in the first blockquote again.

</p></blockquote>
<p>

And here we are back outside of the first blockquote.

</p><h3 id="lists">6. Lists</h3>

Here is an Unordered (bullet) List (<span class="tt">&lt;ul&gt;..&lt;/ul&gt;</span>):

<ul>
<li>This is a List Item (<span class="tt">&lt;li&gt;</span>).
</li><li>This is another item.
</li><li>This is yet another item.
</li></ul>

Here is an Ordered (numbered) List (<span class="tt">&lt;ol&gt;..&lt;/ol&gt;</span>):

<p>
</p><ol>
<li>This is a List Item (<span class="tt">&lt;li&gt;</span>).
</li><li>This is another item.
</li><li>This is yet another item.
</li></ol>
<p>

And here is a Description List (<span class="tt">&lt;dl&gt;</span>).
using Kermit commands as an example:

</p><p>
</p><dl>

<dt><span class="tt">SET FILE TYPE BINARY</span>

</dt><dd>This command tells Kermit to transfer files in binary mode.  In other
words, don't mess with the file, just send it as-is.  The result on the
receiving computer should be identical to the original.

<p>

</p></dd><dt><span class="tt">SET FILE TYPE TEXT</span>

</dt><dd>This command tells Kermit to transfer files in text mode.  This should be
used with plain-text files, especially when transferring them between
computers with different file formats or operating systems, such as VMS and
Unix, or Unix and Windows.  It converts the file's format and character-set
(if necessary) so the received file is usable on the destination computer.

</dd></dl>
<p>

You can have lists within lists:

</p><p>
</p><ol>
<li>A gromet
</li><li>A widget
</li><li>A framus, which consists of the following components:
<ul>
<li>A doohickey.
</li><li>A veeblefetzer -- these come in several colors:
<ol>
<li>Purple
</li><li>Purple
</li><li>Purple
</li></ol>
</li><li>A whatchamacallit.
</li></ul>
</li><li>A doodad.
</li></ol>

<p>

And you can have ordered lists that use letters instead of numbers:

</p><p>

</p><ol type="a">
<li>Pennies
</li><li>Nickels
</li><li>Dimes
</li><li>Quarters
</li></ol>

<h3 id="links">7. Links</h3>

Links can be internal within a Web page (like to
the <a href="#contents">Table of Contents</a> at the top), or they
can be to external web pages or pictures on the same website, or they
can be to websites, pages, or pictures anywhere else in the world.

<p>

Here is a link to the <a href="http://www.kermitproject.org/">Kermit
Project home page</a>.  And here is what the HTML looks like:

</p><div style="overflow-x:auto">
<blockquote>
<pre>&lt;a href="http://www.kermitproject.org/"&gt;
Kermit Project home page
&lt;/a&gt;
</pre>
</blockquote>
</div>
<p>

The part inside the quotes is called the URL (Uniform Resource Locator).
Here is a link to <a href="#lists">Section 6</a> of the page you are
reading, and the HTML:

</p><blockquote>
<pre>&lt;a href="#lists"&gt;Section 6&lt;/a&gt;
</pre>
</blockquote>

The "#" indicates an internal section ID, in this case:

<blockquote>
<pre>&lt;h3 id="lists"&gt;6. Lists&lt;/h3&gt;
</pre>
</blockquote>

<p>

Here is a link to
<a href="http://kermitproject.org/ckuins.html#x4.0">Section 4.0</a> of
another document, at another website;
the <a href="http://kermitproject.org/ckuins.html">C-Kermit for Unix
Installation Instructions</a>.  And the HTML:

</p><blockquote>
<pre>&lt;a href="http://kermitproject.org/ckuins.html#x4.0"&gt;
Section 4.0
&lt;/a&gt;
</pre>
</blockquote>

<p>

Here is a link to a picture:
<a href="rabbit.jpg">CLICK HERE</a> to see it.

</p><p>

If you want to link to a particular section of somebody else's Web
page, visit the page, "view source", search for the text at that spot
and see if there is an "id=" clause; if so, use the ID as shown just above;
if not you're out of luck.

</p><p>

If you want to link to a particular page of a PDF document, just put
"#page=123" (replace by the desired number) at the end of the URL.

</p><h3 id="tables">8. Tables</h3>

Here's a simple table with some headings and a few rows:

<p>
</p><blockquote style="overflow-x:auto;">
<table>
<tbody><tr>            <!-- start table row -->
<th>Heading A   <!-- table heading -->
</th><th>Heading B
</th><th>Heading C
</th></tr><tr>            <!-- start another row -->
<td>Cell 1A
</td><td>Cell 1B
</td><td>Cell 1C
</td></tr><tr>            <!-- start another row -->
<td>Cell 2A
</td><td>Cell 2B
</td><td>Cell 2C
</td></tr><tr>            <!-- start another row -->
<td>Cell 3A
</td><td>Cell 3B
</td><td>Cell 3C
</td></tr></tbody></table>

</blockquote>
<p>

Same table again but with borders:

</p><p>
</p><blockquote>

<table border="">
<tbody><tr>            <!-- start table row -->
<th>Heading A   <!-- table heading -->
</th><th>Heading B
</th><th>Heading C
</th></tr><tr>
<td>Cell 1A
</td><td>Cell 1B
</td><td>Cell 1C
</td></tr><tr>
<td>Cell 2A
</td><td>Cell 2B
</td><td>Cell 2C
</td></tr><tr>
<td>Cell 3A
</td><td>Cell 3B
</td><td>Cell 3C
</td></tr></tbody></table>

</blockquote>
<p>
The appearance with double borders is the default (and therefore easiest)
table style.  You can
use <a href="https://www.w3schools.com/html/html_tables.asp">table
attributes</a> to change the appearance.

</p><p>

Here's the same table again but with Column C right-adjusted:

</p><p>
</p><blockquote>

<table border="">
<tbody><tr>            <!-- start table row -->
<th>Heading A   <!-- table heading -->
</th><th>Heading B
</th><th>Heading C
</th></tr><tr>
<td>Cell 1A
</td><td>Cell 1B
</td><td align="right">Cell 1C
</td></tr><tr>
<td>Cell 2A
</td><td>Cell 2B
</td><td align="right">Cell 2C
</td></tr><tr>
<td>Cell 3A
</td><td>Cell 3B
</td><td align="right">Cell 3C
</td></tr></tbody></table>

</blockquote>

<p id="tables">

And finally, here it again with some "style" parameters applied to 
get rid of the ugly double borders, which you can see in the 
<tt>&lt;style&gt;</tt> section of the
<tt>&lt;head&gt;</tt> at the top of this page, if you "view source".

</p><p>
</p><blockquote>
<table class="compact">
<tbody><tr>            <!-- start table row -->
<th>Heading A   <!-- table heading -->
</th><th>Heading B
</th><th>Heading C
</th></tr><tr>
<td>Cell 1A
</td><td>Cell 1B
</td><td align="right">Cell 1C
</td></tr><tr>
<td>Cell 2A
</td><td>Cell 2B
</td><td align="right">Cell 2C
</td></tr><tr>
<td>Cell 3A
</td><td>Cell 3B
</td><td align="right">Cell 3C
</td></tr></tbody></table>
</blockquote>

<p>
So with just three lines added to the
<tt>&lt;style&gt;</tt> section at the top of the page, you can make
all your tables look better.

</p><h3 id="viewing">9. Viewing Your Web Page</h3>

Anyway, back to basics.  If you make a simple <tt>index.html</tt>
in your Web directory like:

<blockquote style="overflow-x:auto">
<pre>&lt;!DOCTYPE HTML&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;title&gt;My first web page&lt;/title&gt;
&lt;META charset="utf-8"&gt;
&lt;META name="viewport"
 content="width=device-width, initial-scale=1.0"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h2&gt;This is a heading&lt;/h2&gt;
And this is some text.
&lt;/body&gt;
&lt;/html&gt;
</pre>
</blockquote>

Then if you double-click on <tt>index.html</tt>, it will open in your
Web browser.

<p>

Now you can work on your page's <tt>&lt;body&gt;</tt>: add more text,
add some images, add some links, add subheadings, some lists, some tables,
whatever you want.  Each time you make a change, reload the page in your
browser (usually done by clicking on the <b>⟳</b> symbol, or typing
Ctrl-R).

</p><p>

By the way, a web page can have any name at all, it doesn't have to be
index.html.  Index.html is a special name that is used for the "home page"
of a website.  To open a web page that has some other name, right-click on
the filename and then choose "Open with..."; then click on your Web
browser's name.

</p><h3 id="install">10. Installing Your Web Page on the Internet</h3>

How to put your web page on the Internet depends on your Internet Service
Provider (ISP).  At Columbia University, each user has a "shell account" on
the central server, which runs a Unix-based operating system, and which you
can access with a terminal emulator such as <a href="http://kermitproject.org/">Kermit</a>.  Here's an example that
applies to Columbia University's web server, showing how to upload your
files from Windows:

<p>
</p><blockquote>
<i>

There are easier ways to do this than what I describe below, but they
require add-on software.  The following method should work for everybody
who has Windows and an Internet connection.

</i>
</blockquote>
<p>

If you create a <span class="tt">public_html</span> subdirectory of your
login directory, give it "world" read and search permission, and then create
an <span class="tt">index.html</span> file in that directory and give it world
read permission, you'll have a home page.  In this example
"<span class="tt">$</span>" is the shell prompt (yours might be different),
and what you type is underlined.  CAUTION: the directory name
is <span class="tt">public_html</span> but the underscore might be obscured
the underline in the examples below.  Whenenever typing
"<span class="tt">public_html</span>" always include the underscore.
CAUTION#2: Some Web hosting sites might use different a different name for
the user's Web directory.

</p><p>
</p><blockquote>
<pre>$ <u>cd</u>                      <i>(Change to your login directory)</i>
$ <u>mkdir public_html</u>       <i>(Create</i> public_html <i>subdirectory)</i>
$ <u>chmod 755 public_html</u>   <i>(Give it world read/search permission)</i>
$ <u>cd public_html</u>          <i>(Enter the</i> public_html <i>subdirectory)</i>
</pre>
</blockquote>
<p>

You only have to do this part once.  Remember, it's <tt>public_html</tt> with
an underscore, which tends not to show up when a command is underlined.

</p><p>

Let's assume you have created a website in the Web folder on your PC.
Here's an example of how to upload your Web files to your <span class="tt">public_html</span>
directory on Columbia University's
Cunix server using FTP (File Transfer Protocol).
First start the FTP program:

</p><p>
</p><blockquote>
<i>Start</i>&nbsp;<span class="tt">-&gt;</span>&nbsp;<i>Run</i>
</blockquote>
<p>

and type "ftp" in the box.  An FTP window opens and an "<span class="tt">ftp&gt;</span>"
prompt appears.  Type the underlined commands at the "<span class="tt">ftp&gt;</span>"
prompt (substituting your own user ID, etc):

</p><div style="overflow-x:auto">
<blockquote>
<pre>ftp&gt; <u>lcd Desktop</u>
Local directory now C:\Users\olga\Desktop.
ftp&gt; <u>lcd Web</u>
Local directory now C:\Users\olga\Desktop\Web.
ftp&gt; <u>open cunix</u>
Connected to cunix.cc.columbia.edu.
220 Cunix FTP server (Version 5.60) ready.
User (cunix.cc.columbia.edu:(none)): <u>olga</u>
331 Password required for olga.
Password: <u><i>(type your password here)</i></u>
230 User olga logged in.
ftp&gt; <u>cd public_html</u> <i>("public_html" with underscore)</i>
ftp&gt; <u>binary</u>
ftp&gt; <u>put index.html</u>
200 PORT command successful.
150 Opening BINARY mode data connection for index.html.
226 Transfer complete.
ftp: 285 bytes sent in 0.00Seconds 285000.00Kbytes/sec.
ftp&gt; <u>site chmod 644 index.html</u>
200 CHMOD command successful
ftp&gt; <u>bye</u>
</pre>
</blockquote>
</div>

This sends the <span class="tt">index.html</span> file to your <span class="tt">public_html</span>
directory on the server.  You can send any other file by substituting its
name for "<span class="tt">index.html</span>.  If you want to send all the files in
your Web folder, replace "<span class="tt">put index.html</span> with "<span class="tt">put&nbsp;*</span>"
(asterisk, meaning "all files" in this directory).  Always use binary mode
unless you know what you're doing.

<p>

If the "site chmod" command failed (this service is not supported by some
FTP servers), you have one more step.  Before others can see your web files,
you have to give them "world read" permission.  Again, log in to the server
using a terminal emulator (Telnet, SSH, Kermit, whatever), and:

</p><p>
</p><blockquote>
<pre>$ <u>cd ~/public_html</u>        <i>(Enter the</i> public_html <i>subdirectory)</i>
$ <u>chmod 644 *</u>             <i>(Make all files publically readable)</i>
</pre>
</blockquote>
<p>

Now you have a home page.  If you were at Columbia and your login ID was
"olga", the address (URL) of your home page would be:

</p><p>
</p><blockquote>
<span class="tt">http://www.columbia.edu/~olga/</span>
</blockquote>
<p>

If you want to add pictures to your Web page, you can upload those too (also
with Kermit or FTP), and you also have to "chmod 644" all the files to make
them readable by everybody.  Every time you add new files to your
<span class="tt">public_html</span> directory, you have to "chmod&nbsp;644" them so they
are accessible, either in the FTP session itself (as shown previously), or
by logging in to the host and:

</p><p>
</p><blockquote>
<pre>$ <u>cd ~/public_html</u> ("public_html" with underscore)
$ <u>chmod 644 *</u>
</pre>
</blockquote>

<p>


Pictures should be in JPG or PNG or GIF format.  To include a picture
("image") in your page, include a sequence like this at the desired spot:

</p><p>
</p><blockquote>
<pre>&lt;img src="<i>filename</i>" alt="brief description"&gt;
</pre>
</blockquote>
<p>

Replace <i>filename</i> by the name of the file
(e.g. <span class="tt">skyline.jpg</span>).  Almost every HTML tag can be
customized by "attributes" in the begin tag.  For example if you want the
image to scale itself to the viewer's window (on a computer, cell phone,
or other device), and furthermore you want the text of the page to flow
around it, you can do:

</p><blockquote class="example">&lt;img alt="brief description"
 style="width:50%;
  max-width:480px;
  float:left;
  margin:10px;"
  src="<i>filename</i>"&gt;
</blockquote>

<p>

You can look up the attributes in Google, just search for <i>html width</i>,
 <i>html float</i>, etc.

</p><p>

Now you have your own home page on the Web, and your own URL (Uniform
Resource Locator, or Web address).  In this example, the URL is:

</p><p>
</p><blockquote>
<tt>http://www.columbia.edu/~olga/</tt>
</blockquote>

<p>

Of course, if you prefer, you can also do all the Web-page editing directly
on the server, using an a server-based text editor like EMACS or Vi
while logged in to the Unix shell.  In that case you don't need to upload
anything (except maybe photos), but then you also need to be more familiar
with the server's Unix environment and commands and utilities.

</p><h3 id="more">11. Where to go from here</h3>

Most Web pages are created by hideous bloated "Web Authoring" tools, which
are usually designed to hook you (and readers of your web pages) into some
corporate profit-making scheme.  If all you want is text with some pictures
and links, some section headings, and maybe some tables, as opposed to
spinning blinking popup holograms with streaming video, sound effects, etc,
it's best to keep it simple and do it yourself.  This is how the Web started
off in the HTML 1.0 days of the early 1990s.  The ingenious thing was that
it was self propogating.  If you saw a web page with a certain effect and
wanted to know how it was done, you could simply "view source" to get the
"source code" and then adapt it to your own page.  You can still do that
with pages that look like this one, but since most Web pages are no longer
made by hand, you'll often see tons of incomprehensible gibberish (the more
special effects, the more gibberish), for example
at <a href="https://www.cnn.com">CNN</a>.

<p>

Anyway, if you have mastered the simple techniques shown in this page, you
know the basics.  Which is more than can be said of many "web designers" who
only know how to use prepackaged software to create web pages by picking
things from menus and moving things around with a mouse.  To go further,
you can almost always find out how to do what you want by searching
Google ("html how do I ...?"), or looking at the HTML code of different
websites (browser "view source" command) but, again, only for pages
that look like this one.

</p><p>

Of course HTML is a standard, and here are the official references:

</p><ul>
<li>The
<a href="https://www.w3.org/TR/html52/">HTML
5.2 specification</a> (2017).

</li><li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">Cascading
Style Sheets</a> (yet another "standard" layered on top of HTML, which, like
HTML goes through many versions, each one making the previous one obsolete).

</li></ul>

You can check the validity of your web page at
the <a href="http://validator.w3.org/">W3C Markup Validation Service</a>.
Note that this page itself does not pass the Validator because it uses a
number of "obsolete" elements.  That's because (a) they are much easier to
explain, and (b) they still work.  For the first 20 years or so HTML was in
constant flux, but with the release of HTML5 in 2014, it seems to be pretty
stable.

<p>

If you have made mistakes it will let you know, and if you have used "old"
or "deprecated" HTML features it will let you know that too, and usually also
suggest a modern replacement.


</p><h3 id="fluid">12. Postscript: Cell Phones</h3>

<div style="overflow-x:auto;">
The original Web was composed of pages designed to fit on desktop computer
screens, which, over time, became wider and wider.  But then suddenly they
also had to fit on miniscule cell-phone and even "smart watch" screens.  The
main pitfall is that an image might be too wide for the screen, so the image
width should be specified as a percentage of the viewport width, e.g.:
</div>

<div style="overflow-x:auto">
<blockquote>
<pre>&lt;img alt="Brief description" 
 title="Slightly longer description"
 src="picture-of-something.jpg"
 style="width:100%;"&gt;
</pre>
</blockquote>
</div>

Text, on
the other hand, usually just flows to accomodate the viewport.  But if your
page includes text that must not be "wrapped" (for example, program source
code, poetry, computer dialog transcripts), you have to enclose such
sections within:

<p>
</p><blockquote>
<tt>&lt;div style="overflow-x:auto; white-space:pre"&gt;</tt>
<br>
<i>material that must not wrap</i>
<br>
<tt>&lt;/div&gt;</tt>
</blockquote>

<p>

as has been done in several places above, in which case a horizontal
scroll bar will appear automatically if the non-wrapping text is wider than
the viewport.  If you are viewing this page on a wide screen, you can
see this effect if you squeeze your browser horizontally to its minimum
width and then scroll through this page.

</p><p>
<i>(End)</i>
</p><p>
<a href="/~fdc/index.html">Frank da Cruz</a>
<br>
<i>Page created:</i>
1992
<br>
<i>Last&nbsp;update:</i><!--(or Revised:) -->
17 September 2021
<br>
<script>
document.writeln('<span style="margin:0">[<a \
 href="http://validator.w3.org/check?uri=' +
  escape(window.location.href) + '">validate<\/a>]</span>');
</script><span style="margin:0">[<a href="http://validator.w3.org/check?uri=http%3A//www.columbia.edu/%7Efdc/sample.html">validate</a>]</span>

</p><p>
</p><hr>
<p>
  
  
</p></body><!-- close the <body> begun above --></html>
`