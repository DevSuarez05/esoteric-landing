Add-Type -AssemblyName PresentationCore, WindowsBase, PresentationFramework
$player = New-Object System.Windows.Media.MediaPlayer
$player.ScrubbingEnabled = $true
$player.Open([Uri]'file:///c:/esoteric-landing/public/video.mp4')
$player.Position = [TimeSpan]::FromSeconds(3)
Start-Sleep -Seconds 2

$drawingVisual = New-Object System.Windows.Media.DrawingVisual
$drawingContext = $drawingVisual.RenderOpen()
$drawingContext.DrawVideo($player, (New-Object System.Windows.Rect(0, 0, 464, 832)))
$drawingContext.Close()

$bmp = New-Object System.Windows.Media.Imaging.RenderTargetBitmap(464, 832, 96, 96, [System.Windows.Media.PixelFormats]::Pbgra32)
$bmp.Render($drawingVisual)

$encoder = New-Object System.Windows.Media.Imaging.PngBitmapEncoder
$encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($bmp))
$fs = [System.IO.File]::Create('c:\esoteric-landing\scratch\frame_at_3s.png')
$encoder.Save($fs)
$fs.Close()
$player.Close()
Write-Output "Frame saved to c:\esoteric-landing\scratch\frame_at_3s.png"
