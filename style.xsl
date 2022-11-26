<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/quizgame">
<html>
    <body>
        <center><h1>Quiz Game</h1></center> `
        <center><h2>Questions</h2></center>
        <center><xsl:apply-templates/></center><br></br>
        <table border="0" align="center">
            <tr>
            <th colspan="4" align="cenetr" style="background-color:#ff944d">Quiz Game</th>
            </tr>
            <xsl:for-each select="quiz">
            <xsl:sort select="question"/>
            <tr><td colspan="4"><b><xsl:value-of select="question"/></b></td></tr>
            <tr>
                <td><b>A.</b><xsl:value-of select="A"/></td>
                <td><b>B.</b><xsl:value-of select="B"/></td>
                <td><b>C.</b><xsl:value-of select="C"/></td>
                <td><b>D.</b><xsl:value-of select="D"/></td>
            </tr>
            <xsl:if test="choice ='C'">
            <tr>
                <td colspan="4"><b>The correct choice is : </b><xsl:value-of select="choice"/></td>
            </tr>
            </xsl:if>
            <xsl:choose>
            <xsl:when test="answer = '18'">
            <tr>
                <td colspan="4" style="background-color:#99ff99"><b>Answer: </b> Eighteen </td>
            </tr>
             </xsl:when>
             <xsl:otherwise>
                <td colspan="4" style="background-color:#99ff99"><b>Answer: </b><xsl:value-of select="answer"/></td>
            </xsl:otherwise>
             </xsl:choose>
            
            </xsl:for-each>
        </table>
    </body>

</html>
</xsl:template>
        <xsl:template match="quiz">
        <p>
            <xsl:apply-templates select="question"/>  
        </p>
        </xsl:template>

</xsl:stylesheet>
