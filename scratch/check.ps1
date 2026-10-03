Add-Type -AssemblyName PresentationCore
$player = New-Object System.Windows.Media.MediaPlayer
$player.Open([Uri]'file:///c:/esoteric-landing/public/video.mp4')
Start-Sleep -Seconds 2
Write-Output "Width: $($player.NaturalVideoWidth) Height: $($player.NaturalVideoHeight)"
$player.Close()
