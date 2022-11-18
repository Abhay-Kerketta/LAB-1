<?xml version="1.0" encoding="UTF-8"?>
<html xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/quizgame">
<body>
<xsl:for-each select="quizgame/quiz">
<div style="background-color: #80ffff;color:black;padding:4px">
        <span style="font-weight:bold">
            <p><xsl:value-of select="question"/></p>
        </span>
    </div>
    <div style="margin-left:20px;margin-bottom:1em;font-size:10pt">
        <ol>
            <li><xsl:value-of select="A"></li>
            <li><xsl:value-of select="B"></li>
            <li><xsl:value-of select="C"></li>
            <li><xsl:value-of select="D"></li>
        </ol>

    </div>
    <div style="margin-left:20px;margin-bottom:1em;font-size:10pt">
        <xsl:value-of select="answer">
    </div>

</xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
