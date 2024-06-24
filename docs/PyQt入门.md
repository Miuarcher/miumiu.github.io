# PyQt入门

## 从创建一个applicatiion开始

### 下载PySide6

```bash 
pip install PySide6
```

### 创建自己的可视化文件

#### 导入对应的QApplication和QWidge部件
```bash
from PySide6.QtWidgets import QApplication, QWidget
```

#### 创建一个Qapplication的实例
```bash
app = QApplication(sys.argv)
```

#### 以window为变量名创建一个QWidget实例并在窗口中展示
```bash
window = QWidget()
window.show()
```

#### 启动app循环即可显示窗口
```bash
app.exec()
```
 - 事件循环:在Qt的执行过程中,主要依赖于类.每个应用程序都需要一个（也只有一个）对象才能运行。此对象保存应用程序的事件循环，即控制用户与 GUI 的所有交互的核心循环。用户与应用程序的每次交互（无论是按键、单击鼠标还是鼠标移动）都会生成一个事件，该事件放置在事件队列中。在事件循环中，在每次迭代时检查队列，如果找到等待事件，则将事件和控制传递给事件的特定事件处理程序。事件处理程序处理事件，然后将控制权传递回事件循环以等待更多事件,每个应用程序只有一个正在运行的事件循环。

#### QPushButton和QMainWindow

导入QPushButton和QMainWindow类

```bash
from PySide6.QtWidgets import QPushButton,QMainWindow
```
在Qt当中,任何一个部件都可以作为窗口被打开,所以如果程序中有如下代码:
```bash
window=QPushButton("push me")
```
那么对象window就会以单个按钮的形式打开.
而如果代码为:
```bash
window=QMainWindow()
```
那么打开效果就会和一般窗口一致

现在我们可以在```main.py```中使用
```bash
import sys
from PySide6.QtWidgets import QApplication, QMainWindow

app = QApplication(sys.argv)

window = QMainWindow()
window.show()

# Start the event loop.
app.exec()
```

来创建并打开一个窗口,现在需要解决的问题是直接对于主程序的操作使得程序不易修改的同时会使得不同窗口的创建变得繁琐,所以我们不妨将MainWindow封装到一个子类当中,将窗口行为从主程序中独立出来.

代码如下:
```bash
import sys

from PySide6.QtCore import QSize, Qt
from PySide6.QtWidgets import QApplication, QMainWindow, QPushButton


# Subclass QMainWindow to customize your application's main window
class MainWindow(QMainWindow):
    # 必须包含super函数__init__来成功构造Qt类的子类
    def __init__(self):
        super().__init__()

        self.setWindowTitle("My App")

        button = QPushButton("Press Me!")

        # Set the central widget of the Window.
        self.setCentralWidget(button)


app = QApplication(sys.argv)

window = MainWindow()
window.show()

app.exec()
```









本文档遵循CC-BY-NC-SA协议,链接至[此网址](https://www.pythonguis.com/tutorials/pyside6-creating-your-first-window/)