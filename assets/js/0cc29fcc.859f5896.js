(self.webpackChunkipc_144=self.webpackChunkipc_144||[]).push([[322],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,u=c["".concat(p,".").concat(m)]||c[m]||f[m]||r;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6269:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},p="Text Files",s={unversionedId:"E-Secondary-Storage/text-files",id:"E-Secondary-Storage/text-files",isDocsHomePage:!1,title:"Text Files",description:"Learning Outcomes",source:"@site/docs/E-Secondary-Storage/text-files.md",sourceDirName:"E-Secondary-Storage",slug:"/E-Secondary-Storage/text-files",permalink:"/E-Secondary-Storage/text-files",editUrl:"https://github.com/Seneca-ICTOER/IPC144/tree/main/docs/E-Secondary-Storage/text-files.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"courseNotesSidebar",previous:{title:"Library Functions",permalink:"/D-Modularity/library-functions"},next:{title:"Records and Files",permalink:"/E-Secondary-Storage/records-and-files"}},d=[{value:"Learning Outcomes",id:"learning-outcomes",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Files",id:"files",children:[{value:"Text Format",id:"text-format",children:[]}]},{value:"Connection",id:"connection",children:[{value:"Opening a File",id:"opening-a-file",children:[]}]},{value:"Closing",id:"closing",children:[]},{value:"Communication",id:"communication",children:[]},{value:"Writing",id:"writing",children:[{value:"Formatted Writing",id:"formatted-writing",children:[]},{value:"Unformatted Writing",id:"unformatted-writing",children:[]}]},{value:"Reading",id:"reading",children:[{value:"Formatted Reading",id:"formatted-reading",children:[]},{value:"Unformatted Reading",id:"unformatted-reading",children:[]}]},{value:"State of a File Object",id:"state-of-a-file-object",children:[{value:"Rewind",id:"rewind",children:[]},{value:"End of File",id:"end-of-file",children:[]}]},{value:"Comparison",id:"comparison",children:[]}],f={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"text-files"},"Text Files"),(0,r.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,r.kt)("p",null,"After reading this section, you will be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stream data using standard library functions to access persistent text")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Secondary storage retains its information when a computer is turned off and provides a mechanism for holding information beyond the execution of a program.  Information in secondary storage can be accessed later by the same or a different program.  This information resides in secondary memory in the form of files. "),(0,r.kt)("p",null,"This chapter describes how to connect a program to a file, how to store information in that file and how to retrieve that information. "),(0,r.kt)("h2",{id:"files"},"Files"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"file")," is a named area of secondary storage.  The file may be fragmented; that is, it may consist of several parts stored at different non-contiguous locations in secondary memory.  A file does not necessarily occupy contiguous space on the storage device."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://ict.senecacollege.ca//~ipc144/pages/images/files.png",alt:null})),(0,r.kt)("p",null,"The byte is the fundamental storage unit of a file.  The distinguishing feature of a file is its end-of-file mark.  We refer to this mark as ",(0,r.kt)("inlineCode",{parentName:"p"},"EOF"),".  ",(0,r.kt)("inlineCode",{parentName:"p"},"EOF")," typically has the value -1. "),(0,r.kt)("h3",{id:"text-format"},"Text Format"),(0,r.kt)("p",null,"A file holds information in either of two formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"text - readable and editable data"),(0,r.kt)("li",{parentName:"ul"},"binary - executable program code (beyond the scope of these notes)")),(0,r.kt)("p",null,"Data stored in text format is suitable for displaying and modifying through a text editor.  Files stored in text format are portable across platforms that share the same character set.  A common standard is the ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/ISO/IEC_646#Codepage_layout"},"IEC/ISO 646-1083 Invariant Code Set"),", which consists of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"52 upper and lower case alphabetic characters: A, B, ..., Z, a, b, ..., z"),(0,r.kt)("li",{parentName:"ul"},"10 digits: 0, 1, ..., 9"),(0,r.kt)("li",{parentName:"ul"},"space"),(0,r.kt)("li",{parentName:"ul"},"null, line feed, carriage return, horizontal tab, vertical tab and form feed: \\0, \\l, \\n, \\t, \\v, \\f"),(0,r.kt)("li",{parentName:"ul"},"29 graphic characters: ! # % ^ & * ( _ ) - + = ~ ","[ ]"," ' | \\ ; : \" { } , . < > / ?")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that this set excludes the $ and ","`"," characters.  The encoding for characters like $ and ","`"," does not produce the same characters on all platforms (for more details see ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/ISO/IEC_646#National_variants"},"National Variants"),"). ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sequential Access")),(0,r.kt)("p",null,"The most common way to access data in a text file is sequentially, byte by byte.  We process the file as a stream of bytes without skipping any byte until we reach the file's end-of-file (",(0,r.kt)("inlineCode",{parentName:"p"},"EOF"),") mark. "),(0,r.kt)("h2",{id:"connection"},"Connection"),(0,r.kt)("p",null,"A C program connects to a file through an object of ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," type.  The object holds information about the file and keeps track of the next position to be accessed.  We use a library function to retrieve the address of the file object, store that address in a pointer and subsequently access the file through that pointer."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://ict.senecacollege.ca//~ipc144/pages/images/fopen.png",alt:null})),(0,r.kt)("p",null,"Allocating a pointer to a ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," object takes the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"FILE *identifier;\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," is the type of the FILE object and identifer is the name of the pointer to the ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," object.  We call this pointer a handle to the object. "),(0,r.kt)("p",null,"The structure type ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," is declared in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<stdio.h>")," header file.  To allocate memory for a ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," pointer, we write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"}," #include <stdio.h>\n\n FILE *fp = NULL;\n")),(0,r.kt)("p",null,"We initialize the pointer ",(0,r.kt)("inlineCode",{parentName:"p"},"fp")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," as a precaution against premature dereferencing.  If our program accesses data at ",(0,r.kt)("inlineCode",{parentName:"p"},"fp")," before the connection to the file is open, our program may generate a ",(0,r.kt)("strong",{parentName:"p"},"segmentation fault"),".  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NULL is defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<stdio.h>")," header file")),(0,r.kt)("h3",{id:"opening-a-file"},"Opening a File"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fopen()")," opens the named file and returns the address of the ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," object that connects to that file.  The prototype for ",(0,r.kt)("inlineCode",{parentName:"p"},"fopen()")," is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"FILE *fopen(const char file_name[], const char mode[]);\n")),(0,r.kt)("p",null,"The first parameter holds the address of the file's name, which could be a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"string literal"))," (a set of characters enclosed in a pair of ",(0,r.kt)("strong",{parentName:"p"},"double quotes"),").  The second parameter holds the address of the connection mode, which could also be a string literal. "),(0,r.kt)("p",null,"The most common connection modes are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"r"')," - read from the file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"w"')," - write to the file: if the file exists, truncate its contents and then write; if the file does not exist, create a new file and then write to that file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"a"')," - write to the end of the file: if the file exists, append to the end of the file; if the file does not exist, create it and then write to it")),(0,r.kt)("p",null,"The less common connection modes for text files are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"r+"')," - opens the file for reading and possibly writing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"w+"')," - opens the file for writing and possibly reading; if the file exists, truncates its contents and then writes to the file; if the file does not exist, creates a new file and then writes to that file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"a+"')," - opens the file for writing to the end of the file and possibly reading; if the file exists, appends to the end of the file; if the file does not exist, creates it and then writes to the file")),(0,r.kt)("p",null,"The mode parameter is enclosed in a pair of double quotes, not single quotes."),(0,r.kt)("p",null,"To open a file named alpha.txt for writing, we write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// Open a file\n// openFile.c\n\n#include <stdio.h>\n\nint main(void)\n{\n        FILE *fp = NULL;\n\n        fp = fopen("alpha.txt","w");\n\n        if (fp != NULL)\n        {\n                // statements to be added later\n        }\n        else\n        {\n                printf("Failed to open file\\n"); \n        }\n        return 0;\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fopen()")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," if it fails to connect to the file.  ",(0,r.kt)("inlineCode",{parentName:"p"},"fopen()")," can fail due to lack of permission, premature removal of the secondary storage medium or a full device. "),(0,r.kt)("h2",{id:"closing"},"Closing"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fclose()")," disconnects the file from the host program.  This library function takes as its only parameter the file pointer.  The prototype for ",(0,r.kt)("inlineCode",{parentName:"p"},"fclose()")," is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int fclose(FILE *);\n")),(0,r.kt)("p",null,"If the file is open for writing or appending, ",(0,r.kt)("inlineCode",{parentName:"p"},"fclose()")," writes any data remaining in the file's buffer to the file and appends the end of file mark after the last character written.  If the file is open for reading, ",(0,r.kt)("inlineCode",{parentName:"p"},"fclose()")," ignores any data left in the file's buffer and closes the connection. "),(0,r.kt)("p",null,"To close a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha.txt")," that is open for writing, we write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// Close an Opened file\n// closeFile.c\n\n#include <stdio.h>\n\nint main(void)\n{\n        FILE *fp = NULL;\n\n        fp = fopen("alpha.txt","w");\n\n        if (fp != NULL)\n        {\n                // statements to be added later\n                fclose(fp);\n        }\n        else\n        {\n                printf("Failed to open file\\n"); \n        }\n        return 0;\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fclose()")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," if successful, ",(0,r.kt)("inlineCode",{parentName:"p"},"EOF")," if unsuccessful.  ",(0,r.kt)("inlineCode",{parentName:"p"},"fclose()")," fails if the storage device is full, an I/O error occurs or the storage medium is prematurely removed. "),(0,r.kt)("h2",{id:"communication"},"Communication"),(0,r.kt)("p",null,"The C library functions for communicating with an open file include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fprintf()")," - formatted write to file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fputc()")," - write single character to file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fscanf()")," - formatted read from file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fgetc()")," - read single character from file")),(0,r.kt)("h2",{id:"writing"},"Writing"),(0,r.kt)("h3",{id:"formatted-writing"},"Formatted Writing"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fprintf()")," writes data to an open file under format control.  The prototype for this library function is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int fprintf(FILE *, const char [], ...);\n")),(0,r.kt)("p",null,"The first parameter receives the address of the ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," object.  The second parameter receives the address of the string literal that specifies the format.  This literal may contain text to be written directly to the file as well as conversion specifiers, if any, to be applied to the data values supplied as arguments. "),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// Writing to a File\n// writeToFile.c\n\n#include <stdio.h>\n\nint main(void)\n{\n        FILE *fp = NULL;\n        int sku = 4664;\n        double price = 1.49;\n\n        fp = fopen("alpha.txt","w");\n\n        if (fp != NULL)\n        {\n                fprintf(fp, "sku = %d price = %10.2lf\\n", sku, price);\n                fclose(fp);\n        }\n        else \n        {\n                printf("Failed to open file\\n"); \n        }\n        return 0;\n}\n')),(0,r.kt)("h3",{id:"unformatted-writing"},"Unformatted Writing"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fputc()")," writes a single character to an open file.  The prototype for this library function is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int fputc(int ch, FILE *fp);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ch")," receives a copy of the character to be written and ",(0,r.kt)("inlineCode",{parentName:"p"},"fp")," receives the address of the ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," object.  ",(0,r.kt)("inlineCode",{parentName:"p"},"fputc()")," returns the character written, or ",(0,r.kt)("inlineCode",{parentName:"p"},"EOF")," in the event of an error."),(0,r.kt)("h2",{id:"reading"},"Reading"),(0,r.kt)("h3",{id:"formatted-reading"},"Formatted Reading"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fscanf()")," reads a sequence of bytes from an open file under format control.  The prototype for this library function is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int fscanf(FILE *, const char [], ...);\n")),(0,r.kt)("p",null,"The first parameter receives the address of the ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," object.  The second parameter receives the address of the string literal that specifies the format.  This literal contains the conversion specifiers to be used in translating the file data to data stored in memory."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// Reading from a File\n// readFromFile.c\n\n#include <stdio.h>\n\nint main(void)\n{\n        FILE *fp = NULL;\n        int sku;\n        double price;\n\n        fp = fopen("alpha.txt","r");\n\n        if (fp != NULL)\n        {\n                fscanf(fp, "%d %lf", &sku, &price);\n                printf("sku = %d price = %10.2lf\\n", sku, price); \n                fclose(fp);\n        }\n        else \n        {\n                printf("Failed to open file\\n");\n        }\n\n        return 0;\n}\n')),(0,r.kt)("h3",{id:"unformatted-reading"},"Unformatted Reading"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fgetc()")," reads a single character from an open file.  The prototype for this library function is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int fgetc(FILE *fp);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fp")," receives the address of the ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," object.  ",(0,r.kt)("inlineCode",{parentName:"p"},"fgetc()")," returns the character read; ",(0,r.kt)("inlineCode",{parentName:"p"},"EOF")," in the event of an error."),(0,r.kt)("h2",{id:"state-of-a-file-object"},"State of a File Object"),(0,r.kt)("p",null,"The C library functions for managing the state of a ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," object include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rewind()")," - rewind the file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"feof()")," - identify the end of the file")),(0,r.kt)("h3",{id:"rewind"},"Rewind"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rewind()")," resets the record pointer in the ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," object the first byte in a file.  The next byte to be accessed by the object will be the first byte in the file. "),(0,r.kt)("p",null,"In other words, to jump to the beginning of a file, instead of disconnecting and re-connecting it, we simply rewind the file.  The prototype for this library function is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void rewind(FILE *fp);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fp")," receives the address of the ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," object. "),(0,r.kt)("p",null,"Consider a text file named produce.txt that contains:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," 4664 1.49\n 4419 1.29\n 4011 0.59 \n")),(0,r.kt)("p",null,"The following program reads and displays this data, rewinds the file and reads and displays again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// Reading from a file\n// readFromFile.c\n\n#include <stdio.h>\n\nint main(void)\n{\n        FILE *fp = NULL;\n        int sku;\n        double price;\n\n        fp = fopen("produce.txt","r");\n\n        if (fp != NULL) \n        {\n                while( fscanf(fp, "%d%lf", &sku, &price) != EOF)\n                        printf("%5d %6.2lf\\n", sku, price);\n                \n                rewind(fp);\n                \n                while (fscanf(fp, "%d%lf", &sku, &price) != EOF)\n                        printf("%5d %6.2lf\\n", sku, price);\n                \n                fclose(fp);\n        }\n        else\n        {\n                printf("Failed to open file\\n"); \n        }\n\n        return 0;\n}\n')),(0,r.kt)("h3",{id:"end-of-file"},"End of File"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"feof()")," indicates whether or not the caller attempted to read the end-of-file mark; that is, read beyond the last character in the file.  The prototype for this library function is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int feof(FILE *fp);\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"feof()")," returns false (",(0,r.kt)("inlineCode",{parentName:"p"},"0"),") if the caller has not attempted to read the end-of-file mark; true if the caller attempted to read the end-of-file mark. "),(0,r.kt)("p",null,"If the next byte to be read is the end-of-file mark, but the caller has not yet read the mark (that is, has only read the last character in the file), ",(0,r.kt)("inlineCode",{parentName:"p"},"feof()")," returns false.  In other words, to receive true, the caller must have attempted to read the end-of-file mark at least once. "),(0,r.kt)("h2",{id:"comparison"},"Comparison"),(0,r.kt)("p",null,"The library functions for communicating with files share many common properties with the functions for communicating with users directly.  The functions belong to the same library, follow the same rules for format control and share a common syntax. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Return Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Standard I/O"),(0,r.kt)("th",{parentName:"tr",align:"left"},"File I/O"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"scanf(...)")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fscanf(fp, ...)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"check to see if the return value is ",(0,r.kt)("inlineCode",{parentName:"td"},"EOF"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"printf(...)")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fprintf(fp, ...)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"returns the number of characters written")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"getchar()")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fgetc(fp)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"check to see if the return value is ",(0,r.kt)("inlineCode",{parentName:"td"},"EOF")," ",(0,r.kt)("strong",{parentName:"td"},"before")," converting it to ",(0,r.kt)("inlineCode",{parentName:"td"},"char")," type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"putchar(ch)")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fputc(ch, fp)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"check to see if the return value is ",(0,r.kt)("inlineCode",{parentName:"td"},"EOF"))))))}c.isMDXComponent=!0}}]);